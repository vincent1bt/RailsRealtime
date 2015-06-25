class Post < ActiveRecord::Base
  after_create {|post| post.message 'create' }

  def message action
    msg = {
            id: self.id,
            title: self.title,
            body: self.body,
    }
    $redis.publish 'rt-change', msg.to_json
  end

end

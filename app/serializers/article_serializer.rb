class ArticleSerializer < ApplicationSerializer
  attributes :id
  attributes :username
  attributes :title
  attributes :body
  attributes :draft
  attributes :published_at
  attributes :created_at
  attributes :updated_at
  attributes :path

  def username
    object.user.username
  end

  def path
    return nil if object.new_record?
    article_path(object)
  end
end

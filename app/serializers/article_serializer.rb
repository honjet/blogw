class ArticleSerializer < ApplicationSerializer
  attributes :id
  attributes :username
  attributes :title
  attributes :body
  attributes :draft
  attributes :published_at
  attributes :created_at
  attributes :updated_at
  attributes :url

  def username
    object.user.username
  end

  def url
    article_path(object)
  end
end

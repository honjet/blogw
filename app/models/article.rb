class Article < ApplicationRecord
  belongs_to :user

  scope :published, -> { where(draft: false) }

  HEAD_LENGTH = 140

  def self.viewable
    published
  end

  # こいつはデコレータか？
  def body_head
    body.slice(0..HEAD_LENGTH)
  end

  def publish?
    !draft
  end

  def publish(at: Time.current)
    self.draft = false
    self.published_at = at
    self
  end

  def unpublish
    self.draft = true
    self.published_at = nil
    self
  end

  def toggle_draft
    draft ? unpublish : publish
  end
end

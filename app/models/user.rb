class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         # :confirmable, :lockable, :timeoutable, :trackable

  validates :username, presence: true, uniqueness: true

  has_many :articles, dependent: :destroy
end

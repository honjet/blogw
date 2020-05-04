class PagesController < ApplicationController
  # GET /pages
  # GET /pages.json
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end

  # GET /pages/username
  # GET /pages/username.json
  def show
    @user = User.find_by(username: params[:username])
    @articles = @user.articles.public
    respond_to do |format|
      format.html
      format.json { render json: @user }
    end
  end
end

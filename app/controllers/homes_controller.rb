class HomesController < ApplicationController
  # GET /homes
  # GET /homes.json
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    @user = User.find_by(username: params[:username])
    @articles = @user.articles.viewable
    respond_to do |format|
      format.html
      format.json { render json: @user }
    end
  end
end

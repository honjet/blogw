class ArticlesController < ApplicationController
  before_action :set_article, only: [:show]

  # GET /articles
  # GET /articles.json
  def index
    @articles = Article.viewable
    respond_to do |format|
      format.html
      format.json { render json: @articles }
    end
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    respond_to do |format|
      format.html { redirect_to [:user, @article] if article_owner? }
      format.json { render json: @article }
    end
  end

  private

  def set_article
    @article = Article.viewable.find(params[:id])
  end

  def article_owner?
    return false if !user_signed_in?
    @article.user == current_user
  end
end

class ArticlesController < ApplicationController
  before_action :set_article, only: [:show]

  # GET /articles
  # GET /articles.json
  def index
    @articles = Article.public.order(updated_at: :desc)
    respond_to do |format|
      format.html
      format.json { render json: @articles }
    end
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    respond_to do |format|
      format.html { redirect_to [:home, @article] if article_owner? }
      format.json { render json: @article }
    end
  end

  private

  def set_article
    @article = Article.public.find(params[:id])
  end

  def article_owner?
    return false if !user_signed_in?
    @article.user == current_user
  end
end

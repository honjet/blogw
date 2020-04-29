class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]

  # GET /articles
  # GET /articles.json
  def index
    @articles = Article.viewable
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_article
    @article = Article.viewable.find(params[:id])
  end
end

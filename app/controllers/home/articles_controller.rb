class Home::ArticlesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_article, only: [:show, :edit, :update, :destroy]

  # GET /home/articles
  # GET /home/articles.json
  def index
    @articles = current_user.articles.home
  end

  # GET /home/articles/1
  # GET /home/articles/1.json
  def show
    respond_to do |format|
      format.html
      format.json { render json: @article }
    end
  end

  # GET /home/articles/new
  def new
    @article = current_user.articles.build
  end

  # GET /home/articles/1/edit
  def edit
  end

  # POST /home/articles
  # POST /home/articles.json
  def create
    @article = current_user.articles.build(article_params)
    @article.publish if @article.publish?

    respond_to do |format|
      if @article.save
        format.html { redirect_to [:home, @article], notice: 'Article was successfully created.' }
        format.json { render :show, status: :created, location: @article }
      else
        format.html { render :new }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /home/articles/1
  # PATCH/PUT /home/articles/1.json
  def update
    @article.attributes = article_params
    @article.toggle_draft if @article.draft_changed?

    respond_to do |format|
      if @article.save
        format.html { redirect_to [:home, @article], notice: 'Article was successfully updated.' }
        format.json { render :show, status: :ok, location: @article }
      else
        format.html { render :edit }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /home/articles/1
  # DELETE /home/articles/1.json
  def destroy
    @article.destroy
    respond_to do |format|
      format.html { redirect_to home_articles_url, notice: 'Article was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = current_user.articles.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :body, :draft)
    end
end

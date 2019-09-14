class Api::EssaysController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]


  ## NEED PRIVATE METHODS TO LIMIT EDIT/DESTROY TO ESSAY'S AUTHOR


  def create
    @essay = Essay.new(essay_params)   ### get required 'title' and 'body'
    
    user_id = current_user.id   ### get required 'user_id' value
    @essay.user_id = user_id   ### set user_id in essay instance

    if @essay.save
      render :show
    else
      render json: @essay.errors.full_messages, status: 422
    end
  end

  def index
    return_function = Essay.includes(:author).all

    if params[:filter]
      return_function = Essay.includes(:author).all_published if params[:filter] == "published"
      return_function = Essay.includes(:author).all_featured if params[:filter] == "featured"
      return_function = Essay.includes(:author).all_unpublished if params[:filter] == false
    end

    @essays = params[:filter] ? return_function : Essay.all

    render :index
  end

  def show
    @essay = Essay.find(params[:id])

    if @essay
      render :show
    else
      render json: @essay.errors.full_messages, status: 404
    end
  end

  def update
    @essay = Essay.find(params[:id])

    if @essay.update(essay_params)
      render :show
    else
      render json: @essay.errors.full_messages, status: 422
    end
  end

  def destroy
    @essay = Essay.find(params[:id])

    if @essay.destroy!
      render json: {}
    else
      render json: ['Record not found'], status: 404
    end
  end

  private

  def essay_params
    params.require(:essay).permit(:title, :body, :summary, :image_url)
  end

end

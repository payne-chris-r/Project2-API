class RunsController < ApplicationController
  skip_before_action :authenticate, only: [:login, :create]

  def index
    @runs = Run.all
    render json: @runs
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render json: @run
  end

  # POST /users
  # POST /users.json
  def create
    @run = Run.new(run_params)
    byebug
    if @run.save
      render json: @run, status: :created
    else
      render json: @run.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @run = Run.find(params[:id])

    if @run.update(run_params)
      head :no_content
    else
      render json: @run.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @run.destroy

    head :no_content
  end

  private
  def run_params
    params.require(:run).permit(:distance,
                                :time,
                                :speed,
                                :comment,
                                :date,
                                :rating,
                                :user_id
                                )
  end
end

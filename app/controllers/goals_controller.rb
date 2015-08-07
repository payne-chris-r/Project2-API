class GoalsController < ApplicationController

  def index
    @goals = Goal.all
    render json: @goals
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render json: @Goal
  end

  # POST /users
  # POST /users.json
  def create
    @goal = Goal.new(goal_params)
    current_user.goals << @goal

    if @goal.save
      render json: @goal, status: :created
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @goal = Goal.find(params[:id])

    if @goal.update(run_params)
      head :no_content
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @goal.destroy

    head :no_content
  end

  private
  def goal_params
    params.require(:goal).permit(:distance,
                                :time,
                                :speed,
                                :user_id
                                )
  end
end

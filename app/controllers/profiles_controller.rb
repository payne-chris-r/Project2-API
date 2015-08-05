class ProfilesController < ApplicationController

  def index
    @profiles = Profile.all
    render json: @profile
  end

  def show
    render json: @profile
  end

  def create
    @profile = Profile.new(profile_params)
    current_user.profile = @profile

    if @profile.save
      render json: @profile, status: :created
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  def update
    @profile = Profile.find(params[:id])

    if @profile.update(profile_params)
      head :no_content
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @profile.destroy

    head :no_content
  end

  private
  def profile_params
    params.require(:profile).permit(:first_name,
                                    :middle_name,
                                    :last_name,
                                    :dob,
                                    :city,
                                    :state,
                                    :picture,
                                    :description,
                                    :user_id
                                    )
  end
end

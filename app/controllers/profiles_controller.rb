class ProfilesController < ApplicationController
  skip_before_action :authenticate, only: [:login, :create]

  #POST /login
  # def login
  #   credentials = user_credentials
  #   token = User.login(credentials[:email], credentials[:password])
  #   if token
  #     render json: { token: token }
  #   else
  #     head :unauthorized
  #   end
  # end

  # GET /users
  # GET /users.json
  def index
    @profiles = Profile.all
    render json: @profile
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render json: @profile
  end

  # POST /users
  # POST /users.json
  def create
    @profile = Profile.new(profile_params)

    if @profile.save
      render json: @profile, status: :created
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
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

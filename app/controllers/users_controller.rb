class UsersController < ApplicationController
  skip_before_action :authenticate, only: [:login, :create]

  #POST /login
  def login
    credentials = user_credentials
    token = User.login(credentials[:username], credentials[:password])
    user = User.find_by(token: token)
    if token
      render json: user
    else
      head :unauthorized
    end
  end

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = current_user
    render json: @user
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_credentials)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = User.find(params[:id])

    if @user.update(user_credentials)
      head :no_content
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy

    head :no_content
  end

  private
  def user_credentials
    params.require(:credentials).permit(:username,
                                        :password
                                        #:password_confirmation
                                        )
  end
end

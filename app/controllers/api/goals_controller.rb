class Api::GoalsController < ApplicationController
    def index        
        @goals = User.find_by_id(params[:user_id]).goals
        render json: @goals
    end 

    def create 
    @goal = Goal.new(goal_params)

    if @goal.save
        render json: @goal
    end 
    end 

    def show
        goal_id = params[:id]
        @goal = Goal.find_by_id(goal_id)
        render json: @goal
    end 

    def update 
        goal_id = params[:id]
        @goal = Goal.find_by_id(goal_id)
        @goal.update_attributes(goal_params)
        render json: @goal
    end 

    def destroy
        goal_id = params[:id]
        @goal = Goal.find_by_id(goal_id)
        @goal.destroy

        render json: {
            msg: "Deleted"
        }
    end 

    private 
    def goal_params
        goal_params = params.require(:goal).permit(:description, :name, :time)
    end         
end



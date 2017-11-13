class Api::ActionItemsController < ApplicationController
    def index 
        @action_items = User.find_by_id(params[:user_id]).goals
        render json: @action_items
    end 

    def create 
    @action_item = ActionItem.new(action_item_params)

    if @action_item.save
        render json: @action_item
    end 
    end 

    def show
        action_item_id = params[:id]
        @action_item = ActionItem.find_by_id(action_item_id)
        render json: @action_item
    end 

    def update 
        action_item_id = params[:id]
        @action_item = ActionItem.find_by_id(action_item_id)
        @action_item.update_attributes(action_item_params)
        render json: @action_item
    end 

    def destroy
        action_item_id = params[:id]
        @action_item = ActionItem.find_by_id(action_item_id)
        @action_item.destroy

        render json: {
            msg: "Deleted"
        }
    end 

    private 
    def action_item_params
        action_item_params = params.require(:action_item).permit(:content, :active, :name)
    end         
end

class MessagesController < ApplicationController
  before_action :set_message_id, only: [:showInbox, :showOutbox]
  before_action :set_message, only: [:inbox, :outbox]

  def index

  end

  def showInbox
  
  end

  def showOutbox
  
  end

  def new
    @message = Message.new
  end
  
  def inbox

  end

  def outbox

  end

  def create
      @message = Message.new(message_params)
      @message.from_user = current_user.username
      @message.published_at = Time.now()
      @message.unread = true
      respond_to do |format|
        if @message.save(message_params)
          format.html { render action: 'create' }
        else
          format.html { render action: 'new' }
        end
      end
  end

  private
    def set_message_id
      @message = Message.find(params[:id])
    end

    def set_message
      @messages = Message.all
    end

    def message_params
      params.require(:message).permit(:from_user, :to_user, :title, :content, :published_at, :unread)
    end
end
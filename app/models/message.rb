class Message < ActiveRecord::Base
	attr_accessible :from_user, :to_user, :title, :content, :published_at, :unread

  	validates_presence_of :to_user, :title, :content
  		
  # validate :must_have_an_existing_to_user
  	
  #	test = User.all
  #	def must_have_an_existing_to_user
  #		 errors.add(:to_error, ": The user does not exist") if test = 0
  #	end

  	belongs_to :user
end

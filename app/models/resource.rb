class Resource < ActiveRecord::Base
  attr_accessible :gold, :energy, :oil, :cristals

  belongs_to :user
end

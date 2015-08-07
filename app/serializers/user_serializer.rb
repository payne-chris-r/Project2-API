class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :total_run_time, :total_run_distance, :average_pace

  def total_run_time
    if object.runs.length != 0
      object.runs.map{|run| run.time}.reduce(:+)
    else
      -1
    end
  end

  def total_run_distance
    if object.runs.length != 0
      object.runs.map{|run| run.distance}.reduce(:+)
    else
      -1
    end
  end

  def average_pace
    total_run_time/total_run_distance
  end
end

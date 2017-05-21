class SourcesController < ApplicationController
  def index
    @sources = Source.all
    render json: @sources
  end

  def show
    @source = Source.find(params[:id])
    render json: @source
  end

  # explicitly saying the sources/new route exists
  def new
    @source = Source.new
  end

  def edit
    @source = Source.find(params[:id])
  end

  def create
    @source = Source.new(source_params)

    if @source.save
      render json: @source, status: :created, location: @source
    else
      render json: @source.errors, status: :unprocessable_entity
    end
  end

  # this is not returning the right response. wtf?
  def update
    @source = Source.find(params[:id])

    if @source.update(source_params)
      head :ok
    else
      render json: @source.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @source = Source.find(params[:id])
    @source.destroy
  end


  private
    def source_params
      params.require(:source).permit(:id, :title, :link, :journal, :abstract, :notes)
    end
end



# t.integer :user_id
# t.text :title
# t.text :link
# t.string :journal
# t.text :abstract
# t.text :notes
# t.integer :wins
#
#
# :user_id, :title, :link, :journal, :abstract, :notes, :wins

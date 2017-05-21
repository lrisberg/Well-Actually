class SourcesController < ApplicationController
  def index
    @sources = Source.all
  end

  def show
    @source = Source.find(params[:id])
  end

  # explicitly saying the sources/new route exists
  def new
    @source = Source.new
  end

  def create
    @source = Source.new(source_params)

    if @source.save
      redirect_to @source
    else
      render 'new'
    end
  end

  private
    def source_params
      params.require(:source).permit(:user_id, :title, :link, :journal, :abstract, :notes, :wins)
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

defmodule Cjpoll.PageController do
  use Cjpoll.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

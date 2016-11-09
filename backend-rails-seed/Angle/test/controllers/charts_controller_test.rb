require 'test_helper'

class ChartsControllerTest < ActionController::TestCase
  test "should get flot" do
    get :flot
    assert_response :success
  end

  test "should get radial" do
    get :radial
    assert_response :success
  end

end

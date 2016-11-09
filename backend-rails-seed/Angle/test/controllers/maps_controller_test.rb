require 'test_helper'

class MapsControllerTest < ActionController::TestCase
  test "should get google" do
    get :google
    assert_response :success
  end

  test "should get vector" do
    get :vector
    assert_response :success
  end

end

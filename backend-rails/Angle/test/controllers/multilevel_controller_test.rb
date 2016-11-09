require 'test_helper'

class MultilevelControllerTest < ActionController::TestCase
  test "should get level1" do
    get :level1
    assert_response :success
  end

  test "should get level3" do
    get :level3
    assert_response :success
  end

end

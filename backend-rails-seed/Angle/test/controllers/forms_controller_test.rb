require 'test_helper'

class FormsControllerTest < ActionController::TestCase
  test "should get standard" do
    get :standard
    assert_response :success
  end

  test "should get extended" do
    get :extended
    assert_response :success
  end

  test "should get validation" do
    get :validation
    assert_response :success
  end

end

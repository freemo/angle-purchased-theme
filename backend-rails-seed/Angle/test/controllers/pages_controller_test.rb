require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get login" do
    get :login
    assert_response :success
  end

  test "should get register" do
    get :register
    assert_response :success
  end

  test "should get recover" do
    get :recover
    assert_response :success
  end

  test "should get lock" do
    get :lock
    assert_response :success
  end

  test "should get template" do
    get :template
    assert_response :success
  end

  test "should get notfound" do
    get :notfound
    assert_response :success
  end

end

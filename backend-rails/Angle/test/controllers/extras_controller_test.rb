require 'test_helper'

class ExtrasControllerTest < ActionController::TestCase
  test "should get mailbox" do
    get :mailbox
    assert_response :success
  end

  test "should get timeline" do
    get :timeline
    assert_response :success
  end

  test "should get calendar" do
    get :calendar
    assert_response :success
  end

  test "should get invoice" do
    get :invoice
    assert_response :success
  end

  test "should get search" do
    get :search
    assert_response :success
  end

  test "should get todo" do
    get :todo
    assert_response :success
  end

  test "should get profile" do
    get :profile
    assert_response :success
  end

end

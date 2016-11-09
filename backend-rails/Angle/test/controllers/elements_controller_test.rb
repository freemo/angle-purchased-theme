require 'test_helper'

class ElementsControllerTest < ActionController::TestCase
  test "should get button" do
    get :button
    assert_response :success
  end

  test "should get notification" do
    get :notification
    assert_response :success
  end

  test "should get carousel" do
    get :carousel
    assert_response :success
  end

  test "should get spinner" do
    get :spinner
    assert_response :success
  end

  test "should get animation" do
    get :animation
    assert_response :success
  end

  test "should get dropdown" do
    get :dropdown
    assert_response :success
  end

  test "should get panel" do
    get :panel
    assert_response :success
  end

  test "should get portlet" do
    get :portlet
    assert_response :success
  end

  test "should get grid" do
    get :grid
    assert_response :success
  end

  test "should get gridmasonry" do
    get :gridmasonry
    assert_response :success
  end

  test "should get typography" do
    get :typography
    assert_response :success
  end

  test "should get fonticons" do
    get :fonticons
    assert_response :success
  end

  test "should get weathericons" do
    get :weathericons
    assert_response :success
  end

  test "should get colors" do
    get :colors
    assert_response :success
  end

end

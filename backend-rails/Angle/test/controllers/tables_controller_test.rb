require 'test_helper'

class TablesControllerTest < ActionController::TestCase
  test "should get standard" do
    get :standard
    assert_response :success
  end

  test "should get extended" do
    get :extended
    assert_response :success
  end

  test "should get datatable" do
    get :datatable
    assert_response :success
  end

end

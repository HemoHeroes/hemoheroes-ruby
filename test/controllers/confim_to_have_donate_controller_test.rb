require 'test_helper'

class ConfimToHaveDonateControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get confim_to_have_donate_index_url
    assert_response :success
  end

end

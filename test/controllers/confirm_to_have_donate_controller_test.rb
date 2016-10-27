require 'test_helper'

class ConfirmToHaveDonateControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get confirm_to_have_donate_index_url
    assert_response :success
  end

end

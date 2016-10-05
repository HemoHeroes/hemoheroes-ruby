require 'test_helper'

class HospitalNecessitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hospital_necessity = hospital_necessities(:one)
  end

  test "should get index" do
    get hospital_necessities_url
    assert_response :success
  end

  test "should get new" do
    get new_hospital_necessity_url
    assert_response :success
  end

  test "should create hospital_necessity" do
    assert_difference('HospitalNecessity.count') do
      post hospital_necessities_url, params: { hospital_necessity: { a_negative: @hospital_necessity.a_negative, a_positive: @hospital_necessity.a_positive, ab_negative: @hospital_necessity.ab_negative, ab_positive: @hospital_necessity.ab_positive, b_negative: @hospital_necessity.b_negative, b_positive: @hospital_necessity.b_positive, o_negative: @hospital_necessity.o_negative, o_positive: @hospital_necessity.o_positive } }
    end

    assert_redirected_to hospital_necessity_url(HospitalNecessity.last)
  end

  test "should show hospital_necessity" do
    get hospital_necessity_url(@hospital_necessity)
    assert_response :success
  end

  test "should get edit" do
    get edit_hospital_necessity_url(@hospital_necessity)
    assert_response :success
  end

  test "should update hospital_necessity" do
    patch hospital_necessity_url(@hospital_necessity), params: { hospital_necessity: { a_negative: @hospital_necessity.a_negative, a_positive: @hospital_necessity.a_positive, ab_negative: @hospital_necessity.ab_negative, ab_positive: @hospital_necessity.ab_positive, b_negative: @hospital_necessity.b_negative, b_positive: @hospital_necessity.b_positive, o_negative: @hospital_necessity.o_negative, o_positive: @hospital_necessity.o_positive } }
    assert_redirected_to hospital_necessity_url(@hospital_necessity)
  end

  test "should destroy hospital_necessity" do
    assert_difference('HospitalNecessity.count', -1) do
      delete hospital_necessity_url(@hospital_necessity)
    end

    assert_redirected_to hospital_necessities_url
  end
end

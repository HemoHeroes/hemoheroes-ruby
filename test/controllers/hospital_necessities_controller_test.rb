require 'test_helper'

class HospitalNecessitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @demand_blood_bank = demand_blood_banks(:one)
  end

  test "should get index" do
    get demand_blood_banks_url
    assert_response :success
  end

  test "should get new" do
    get new_demand_blood_bank_url
    assert_response :success
  end

  test "should create demand_blood_bank" do
    assert_difference('HospitalNecessity.count') do
      post demand_blood_banks_url, params: { demand_blood_bank: { a_negative: @demand_blood_bank.a_negative, a_positive: @demand_blood_bank.a_positive, ab_negative: @demand_blood_bank.ab_negative, ab_positive: @demand_blood_bank.ab_positive, b_negative: @demand_blood_bank.b_negative, b_positive: @demand_blood_bank.b_positive, o_negative: @demand_blood_bank.o_negative, o_positive: @demand_blood_bank.o_positive } }
    end

    assert_redirected_to demand_blood_bank_url(HospitalNecessity.last)
  end

  test "should show demand_blood_bank" do
    get demand_blood_bank_url(@demand_blood_bank)
    assert_response :success
  end

  test "should get edit" do
    get edit_demand_blood_bank_url(@demand_blood_bank)
    assert_response :success
  end

  test "should update demand_blood_bank" do
    patch demand_blood_bank_url(@demand_blood_bank), params: { demand_blood_bank: { a_negative: @demand_blood_bank.a_negative, a_positive: @demand_blood_bank.a_positive, ab_negative: @demand_blood_bank.ab_negative, ab_positive: @demand_blood_bank.ab_positive, b_negative: @demand_blood_bank.b_negative, b_positive: @demand_blood_bank.b_positive, o_negative: @demand_blood_bank.o_negative, o_positive: @demand_blood_bank.o_positive } }
    assert_redirected_to demand_blood_bank_url(@demand_blood_bank)
  end

  test "should destroy demand_blood_bank" do
    assert_difference('HospitalNecessity.count', -1) do
      delete demand_blood_bank_url(@demand_blood_bank)
    end

    assert_redirected_to demand_blood_banks_url
  end
end

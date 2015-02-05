$(function(){
	$('#c_salary, #c_increment').keyup(function(event) {
		doCalculation();
	});

	$('#exp_salary_increment, #exp_salary_increment_1, #exp_salary_increment_2, #exp_salary_increment_3').keyup(function(event) {
		doCalculation();
	});
});

var doCalculation = function(){
	var c_salary = parseInt($('#c_salary').val()) ? parseInt($('#c_salary').val()) : 0;
	var c_increment = parseInt($('#c_increment').val()) ? parseInt($('#c_increment').val()) : 0 ;

	var n_salary = parseInt($('#n_salary').val()) ? parseInt($('#n_salary').val()) : 0;
	var n_increment = parseInt($('#n_increment').val()) ? parseInt($('#n_increment').val()) : 0 ;

	var exp_salary_increment = parseInt($('#exp_salary_increment').val()) ? parseInt($('#exp_salary_increment').val()) : 0;
	var exp_salary_increment_1 = parseInt($('#exp_salary_increment_1').val()) ? parseInt($('#exp_salary_increment_1').val()) : 0;
	var exp_salary_increment_2 = parseInt($('#exp_salary_increment_2').val()) ? parseInt($('#exp_salary_increment_2').val()) : 0;
	var exp_salary_increment_3 = parseInt($('#exp_salary_increment_3').val()) ? parseInt($('#exp_salary_increment_3').val()) : 0;

	var c_first_year = c_salary * ( 1 + (c_increment / 100) );
	var c_second_year = c_first_year * ( 1 + (c_increment / 100) );
	var c_third_year = c_second_year * ( 1 + (c_increment / 100) );

	var n_first_year = n_salary * ( 1 + (n_increment / 100) );
	var n_second_year = n_first_year * ( 1 + (n_increment / 100) );
	var n_third_year = n_second_year * ( 1 + (n_increment / 100) );

	$('#current_specs').children('p').remove();
	$('#current_specs').append('<p>Current Salary : ' + c_salary + '</p>' );
	$('#current_specs').append('<p>Increment % : ' + c_increment + '</p>' );
	$('#current_specs').append('<p>After first year Salary : ' + c_first_year + '</p>' );
	$('#current_specs').append('<p>After second year Salary : ' + c_second_year + '</p>' );
	$('#current_specs').append('<p>After third year Salary : ' + c_third_year + '</p>' );

	$('#official_next_specs').children('p').remove();
	$('#official_next_specs').append('<p>Next Official Salary : ' + n_salary + '</p>' );
	$('#official_next_specs').append('<p>Increment % : ' + n_increment + '</p>' );
	$('#official_next_specs').append('<p>After first year Salary : ' + n_first_year + '</p>' );
	$('#official_next_specs').append('<p>After second year Salary : ' + n_second_year + '</p>' );
	$('#official_next_specs').append('<p>After third year Salary : ' + n_third_year + '</p>' );

	$('#expected_specs').children('p').remove();
	$('#expected_specs').append('<p>Next Expected Salary : ' + (c_salary * (1 + exp_salary_increment / 100 )) + '</p>' );

	if( exp_salary_increment_1 )
		$('#expected_specs').append('<p>After first year Salary : ' + exp_salary_increment_1 + '</p>' );

	if( exp_salary_increment_2 )
		$('#expected_specs').append('<p>After second year Salary : ' + exp_salary_increment_2 + '</p>' );

	if( exp_salary_increment_3 )
		$('#expected_specs').append('<p>After third year Salary : ' + exp_salary_increment_3 + '</p>' );

}
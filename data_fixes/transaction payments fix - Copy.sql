/*
	GET TRANASACTIONS WITH NO PAYMENT MODE BY CUSTOMER TYPE
*/
SELECT DISTINCT
	-- th.id,
	-- th.person_id,
	pt.person_type_name
	-- th.customer_name,
	-- th.employee_no,
	-- th.barcode_no,
	-- th.total_amount,
	-- th.date_created
FROM transaction_headers th 
	LEFT JOIN person_types pt
		ON th.person_type_id = pt.id
WHERE 1 = 1
--	AND pt.person_type_name = 'Guest'
	AND th.id NOT IN (SELECT transaction_header_id FROM transaction_payments) 
	AND meal_allowance_id IS NOT NULL;

SELECT 
	 th.id,
	 th.person_id,
	 pt.person_type_name,
	 th.customer_name,
	 th.employee_no,
	 th.barcode_no,
	 th.total_amount,
	 th.date_created
FROM transaction_headers th 
	LEFT JOIN person_types pt
		ON th.person_type_id = pt.id
WHERE 1 = 1
	AND pt.person_type_name = 'Patient';
	-- AND th.id NOT IN (SELECT transaction_header_id FROM transaction_payments) 
	-- AND meal_allowance_id IS NOT NULL;
	SELECT *
	FROM transaction_payments
	WHERE transaction_header_id = 3623;
	
-- ########################### FIX QUERY HERE #############################3
/*
	QUERY TO FIX PAYMENT MODE IN EMPLOYEE
*/
INSERT INTO transaction_payments (
  transaction_header_id,
  payment_mode_id,
  amount,
  meal_allowance_id
) 
SELECT 
  th.id,
  1,-- payment mode (MEAL ALLOWANCE)
  th.total_amount,
  th.meal_allowance_id 
FROM
  transaction_headers th 
  LEFT JOIN person_types pt 
    ON th.person_type_id = pt.id 
WHERE 1 = 1 
  AND pt.person_type_name = 'Employee' 
  AND th.id NOT IN 
  (SELECT 
    transaction_header_id 
  FROM
    transaction_payments) 
  AND meal_allowance_id IS NOT NULL ;

/* QUERY FOR GUEST, SENIOR CITIZEN AND PWD */
INSERT INTO transaction_payments (
  transaction_header_id,
  payment_mode_id,
  amount,
  meal_allowance_id
) 
SELECT 
  th.id,
  2,
  -- payment mode (CASH)
  th.total_amount,
  th.meal_allowance_id 
FROM
  transaction_headers th 
  LEFT JOIN person_types pt 
    ON th.person_type_id = pt.id 
WHERE 1 = 1 
  AND pt.person_type_name IN ('Guest', 'Senior Citizen', 'PWD') 
  AND th.id NOT IN 
  (SELECT 
    transaction_header_id 
  FROM
    transaction_payments) 
  AND meal_allowance_id IS NOT NULL ;

/* QUERY FOR DOCTOR AND MDI */
INSERT INTO transaction_payments (
	transaction_header_id,
	payment_mode_id,
	amount,
	meal_allowance_id
)
SELECT 
	th.id,
	3, -- payment mode (MDI CORPORATE ACCOUNT)
	th.total_amount,
	th.meal_allowance_id
FROM transaction_headers th 
	LEFT JOIN person_types pt
		ON th.person_type_id = pt.id
WHERE 1 = 1
	AND pt.person_type_name IN ('Doctor','MDI')
	AND th.id NOT IN (SELECT transaction_header_id FROM transaction_payments) ;


/* QUERY FOR PATIENT */
INSERT INTO transaction_payments (
	transaction_header_id,
	payment_mode_id,
	amount,
	meal_allowance_id
)
SELECT 
	th.id,
	4, -- payment mode (Room and Board
	th.total_amount,
	th.meal_allowance_id
FROM transaction_headers th 
	LEFT JOIN person_types pt
		ON th.person_type_id = pt.id
WHERE 1 = 1
	AND pt.person_type_name IN ('Patient')
	AND th.id NOT IN (SELECT transaction_header_id FROM transaction_payments);
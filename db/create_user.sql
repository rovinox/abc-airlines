INSERT INTO airlines_user (question1, question2, question3,answer1,answer2,answer3,first_name,last_name,email,password,image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning * ;



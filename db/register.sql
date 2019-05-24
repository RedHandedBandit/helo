insert into helo_user (
    username,
    password
) values (
    ${username},
    ${hash}
)
returning username, id;
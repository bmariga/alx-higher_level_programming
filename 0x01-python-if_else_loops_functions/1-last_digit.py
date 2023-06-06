#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
last-digit = number % 10

if number < 0:
    last_digit = -last_digit

message = f"Last digit of {number} is {last-digit}"

if last-digit == 0:
    print(f"{message} and is 0")
elif last-digit > 5 and last-digit % 10 != 0:
    print(f"{message} and is greater than 5")
else:
    print(f"{message} and is less than 6 and not 0")

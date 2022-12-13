def coffee_bot():
  print('Welcome to the cafe!')
  size = get_size()
  print(size)

def get_size():
  res = input("What size of drink can I get you? \n[a] Small \n[b] Medium \n[c] Large \n")
  if res == 'a':
    return 'Small'
  elif res == 'b':
    return 'Medium'
  elif res == 'c':
    return 'Large'
  else:
    return get_size()

coffee_bot()
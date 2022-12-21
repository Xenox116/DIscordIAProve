import sys
import json
import ast
import tensorflow as tf

input = ast.literal_eval(sys.argv[1])
# comienxo


output = input
output.append(2)



# fin
print(json.dumps('tensorflow version: '+tf.__version__))
sys.stdout.flush()
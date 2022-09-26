export default function WACCExample() {
  return (
    `# write your WACC code here! here's an example below:

# recursively calculate the nth fibonacci number
# Output:
# This program calculates the nth fibonacci number recursively.
# Please enter n (should not be too large): #input#
# The input n is #output#
# The nth fibonacci number is #output#

# Program:

begin
  int fibonacci(int n) is
    if n <= 1
    then
      return n
    else
      skip
    fi ;
    int f1 = call fibonacci(n - 1) ;
    int f2 = call fibonacci(n - 2) ;
    return f1 + f2
  end

  println "This program calculates the nth fibonacci number recursively." ;
  print "Please enter n (should not be too large): " ;
  int n = 0;
  read n ;
  print "The input n is " ;
  println n ;
  print "The nth fibonacci number is " ;
  int result = call fibonacci(n) ;
  println  result
end
`
  )
}
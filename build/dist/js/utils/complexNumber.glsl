#define product(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
#define conjugate(a) vec2(a.x,-a.y)
#define divide(a, b) vec2(((a.x*b.x+a.y*b.y)/(b.x*b.x+b.y*b.y)),((a.y*b.x-a.x*b.y)/(b.x*b.x+b.y*b.y)))

And then the performed transformation in the vertex shader:

uniform vec2 t;

void main(){
  vec2 z = vec2(position.x,position.y);
  vec2 newPos = divide((z+t),(vec2(1.0,0) + product((conjugate(t)),z)));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 0, 1.0);
}

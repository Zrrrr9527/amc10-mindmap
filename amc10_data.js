/* AMC 10 四大模块知识点数据
 * 每个 leaf: { t:知识点(中英双语), lv:难度(easy/mid/hard), ex:练习示例(自编), kw:AoPS 检索关键词 }
 * 说明：ex 为帮助理解考点的自编练习示例，并非某年某道特定 AMC 真题；
 *      点击 📖 会在 AoPS 站内检索 kw，直达 AoPS 上的真实真题与解析。
 */
var MODULES = [
  {
    key: "algebra", color: "algebra",
    title: "代数 Algebra",
    sub: "占比约 40%–50% · 核心拉分模块",
    shape: "难度分布：<b>全覆盖（易→难均匀）</b>。是送分题的基本盘，但巧妙换元与多项式技巧也能成为压轴。",
    branches: [
      { title: "方程与不等式", leaves: [
        { t: "一次方程 / 方程组 Linear Equations / Systems", lv: "easy", ex: "A theater sells adult tickets for $8 and child tickets for $5. If 120 tickets brought in $780, how many child tickets were sold?", kw: "system of linear equations" },
        { t: "二次方程 / 韦达定理 Quadratic Equations / Vieta", lv: "mid", ex: "The roots of x²−5x+6 are r and s. What is the value of (r−1)(s−1)?", kw: "Vieta's formulas quadratic" },
        { t: "绝对值不等式 Absolute Value Inequalities", lv: "mid", ex: "How many integers n satisfy |n−3| ≤ 5?", kw: "absolute value inequality integers" },
        { t: "分式与根式方程 Rational & Radical Equations", lv: "hard", ex: "If 1/(x−1) + 1/(x+1) = 2/x, what is the positive solution for x?", kw: "rational equation" }
      ]},
      { title: "函数", leaves: [
        { t: "一次 / 线性函数 Linear Functions", lv: "easy", ex: "A line passes through (1,2) and (3,8). What is its slope?", kw: "linear function slope" },
        { t: "二次函数 / 抛物线 Quadratic Functions / Parabolas", lv: "mid", ex: "The parabola y = x² − 4x + 3 has vertex (h,k). Find h + k.", kw: "parabola vertex" },
        { t: "指数与对数函数 Exponential & Logarithmic Functions", lv: "mid", ex: "Solve 3^{2x} = 27^{x−1}. What is x?", kw: "exponential equation" },
        { t: "图像变换与复合 Transformations & Composition", lv: "hard", ex: "If f(x)=x² and g(x)=x+1, what is f(g(2))?", kw: "function composition" }
      ]},
      { title: "数列与级数", leaves: [
        { t: "等差数列 Arithmetic Sequences", lv: "easy", ex: "In the arithmetic sequence 3, 7, 11, ..., what is the 10th term?", kw: "arithmetic sequence" },
        { t: "等比数列 Geometric Sequences", lv: "mid", ex: "A geometric sequence begins 2, 6, 18, ... . What is its 5th term?", kw: "geometric sequence" },
        { t: "递推公式 Recursive Sequences", lv: "hard", ex: "A sequence satisfies a₁=1 and aₙ₊₁=2aₙ+1. Find a₄.", kw: "recursive sequence" },
        { t: "周期性数列 Periodic Sequences", lv: "hard", ex: "The sequence 1, 2, 1, 2, ... repeats with period 2. What is its 101st term?", kw: "periodic sequence" }
      ]},
      { title: "多项式", leaves: [
        { t: "因式定理 Factor Theorem", lv: "mid", ex: "If x−2 is a factor of x³−3x²+ax−2, what is a?", kw: "Factor Theorem" },
        { t: "余数定理 Remainder Theorem", lv: "mid", ex: "What is the remainder when x³ − 2x + 1 is divided by x − 1?", kw: "Remainder Theorem" },
        { t: "多项式因式分解 Polynomial Factorization", lv: "hard", ex: "Factor x⁴ − 16 completely over the reals.", kw: "polynomial factorization" },
        { t: "根与系数综合 Roots & Coefficients (Vieta)", lv: "hard", ex: "The cubic x³ − 6x² + 11x − 6 has roots a, b, c. Find the product abc.", kw: "roots of polynomial Vieta" }
      ]},
      { title: "解题技巧", leaves: [
        { t: "代入验证法 Guess-and-Check / Substitution", lv: "easy", ex: "Which of 0, 1, 2, 3 is a solution to x² − 3x + 2 = 0?", kw: "guess and check" },
        { t: "特殊值法 Plug-in Special Values", lv: "mid", ex: "(x+1)² − x² simplifies to which linear expression? Test x=2 to check.", kw: "plug in values" },
        { t: "配方法 Completing the Square", lv: "mid", ex: "What number completes the square for x² + 6x + ___ to make a perfect square?", kw: "completing the square" },
        { t: "对称与换元 Symmetry & Substitution", lv: "hard", ex: "If a+b=5 and ab=6, what is a²+b²?", kw: "symmetry substitution" }
      ]}
    ]
  },
  {
    key: "geometry", color: "geometry",
    title: "几何 Geometry",
    sub: "占比约 30%–40% · 强调逻辑与空间想象",
    shape: "难度分布：<b>偏中→难</b>。基础面积/勾股能进前 10 题；正余弦/三角法、圆幂、托勒密、梅涅劳斯几乎只出现在 21–25 的难题中。",
    branches: [
      { title: "平面几何", leaves: [
        { t: "三角形面积 / 全等 Triangle Area / Congruence", lv: "easy", ex: "A right triangle has legs 3 and 4. What is its area?", kw: "triangle area" },
        { t: "勾股定理 Pythagorean Theorem", lv: "easy", ex: "A right triangle has legs 5 and 12. What is the hypotenuse?", kw: "Pythagorean theorem" },
        { t: "相似三角形 Similar Triangles", lv: "mid", ex: "Two similar triangles have side ratio 1:3. If the smaller has area 4, what is the larger's area?", kw: "similar triangles" },
        { t: "圆（圆周角/弦切角） Circles (Inscribed / Tangent-Chord Angles)", lv: "mid", ex: "In a circle, an inscribed angle subtends an arc of 80°. What is the angle measure?", kw: "inscribed angle" },
        { t: "正余弦 / 三角法（特殊角·建系） Law of Sines/Cosines (Special Angles · Coordinates)", lv: "hard", ex: "In triangle ABC, AB=5, AC=7, angle A=60°. Use the Law of Cosines to find BC.", kw: "Law of Cosines" }
      ]},
      { title: "坐标几何", leaves: [
        { t: "距离 / 中点公式 Distance / Midpoint Formulas", lv: "easy", ex: "What is the distance between (1,2) and (4,6)?", kw: "distance formula" },
        { t: "直线方程 / 斜率 Line Equations / Slope", lv: "mid", ex: "A line through (0,1) with slope 2 has equation y = ?", kw: "equation of a line" },
        { t: "圆的方程 Equations of Circles", lv: "mid", ex: "What is the equation of the circle centered at (0,0) with radius 3?", kw: "equation of a circle" },
        { t: "解析法综合 Analytic Geometry (Combined)", lv: "hard", ex: "A square has vertices (0,0),(0,2),(2,0),(2,2). What is the area of the triangle formed by (0,0),(2,0),(1,2)?", kw: "coordinate geometry area" }
      ]},
      { title: "立体几何", leaves: [
        { t: "柱/锥/球体积 Volumes of Prisms / Pyramids / Spheres", lv: "easy", ex: "A cylinder has radius 2 and height 3. What is its volume (in terms of π)?", kw: "cylinder volume" },
        { t: "表面积计算 Surface Area", lv: "mid", ex: "A cube has side length 3. What is its surface area?", kw: "surface area cube" },
        { t: "折叠与展开 Folding & Nets", lv: "hard", ex: "A net of a cube is folded. If opposite faces sum to 7 and the top shows 1, what is the bottom?", kw: "cube net" },
        { t: "空间想象 Spatial Visualization", lv: "hard", ex: "Two opposite vertices of a unit cube are joined by a space diagonal. What is its length?", kw: "space diagonal cube" }
      ]},
      { title: "高级定理", leaves: [
        { t: "圆幂定理 Power of a Point", lv: "hard", ex: "Two chords AB and CD intersect at P inside a circle, with PA=2, PB=6, PC=3. Find PD.", kw: "Power of a Point" },
        { t: "托勒密定理 Ptolemy's Theorem", lv: "hard", ex: "A cyclic quadrilateral is a square of side 1. By Ptolemy's theorem, what is its diagonal?", kw: "Ptolemy's theorem" },
        { t: "梅涅劳斯 / 塞瓦 Menelaus / Ceva's Theorems", lv: "hard", ex: "In triangle ABC, cevians from each vertex meet the opposite sides and are concurrent. State Ceva's product condition on the three segment ratios.", kw: "Ceva's theorem" },
        { t: "相似比与面积比 Similarity & Area Ratios", lv: "mid", ex: "If two similar figures have linear ratio 2:5, what is the ratio of their areas?", kw: "area ratio similar" }
      ]},
      { title: "解题技巧", leaves: [
        { t: "辅助线构造 Auxiliary Line Construction", lv: "mid", ex: "To find the height of an equilateral triangle of side 2, drop an altitude. What is the height?", kw: "altitude construction" },
        { t: "坐标法 Coordinate Method", lv: "mid", ex: "Place a triangle with vertices at (0,0),(4,0),(0,3). What is its area using coordinates?", kw: "coordinate method geometry" },
        { t: "面积法 Area Method", lv: "hard", ex: "A triangle has base 6 and area 12. What is its height?", kw: "area method" },
        { t: "旋转 / 对称 Rotation / Symmetry", lv: "hard", ex: "Rotating the point (1,0) by 90° counterclockwise about the origin gives which point?", kw: "rotation symmetry" }
      ]}
    ]
  },
  {
    key: "number", color: "number",
    title: "数论 Number Theory",
    sub: "占比约 10%–20% · 校内薄弱、需系统补强",
    shape: "难度分布：<b>双峰型（要么很易、要么很难）</b>。奇偶整除常出简单题；费马小定理、中国剩余定理几乎只在压轴区，是分水岭。",
    branches: [
      { title: "整数性质", leaves: [
        { t: "质数与合数 Primes & Composites", lv: "easy", ex: "What is the smallest prime greater than 20?", kw: "prime numbers" },
        { t: "因数 / 倍数 Divisors / Multiples", lv: "easy", ex: "How many positive divisors does 36 have?", kw: "number of divisors" },
        { t: "最大公约 / 最小公倍 GCD / LCM", lv: "mid", ex: "What is the least common multiple of 6 and 8?", kw: "least common multiple" },
        { t: "奇偶与完全平方数 Parity & Perfect Squares", lv: "mid", ex: "Is the product of two odd integers odd or even? Justify using parity.", kw: "parity odd even" }
      ]},
      { title: "整除与同余", leaves: [
        { t: "整除规则 Divisibility Rules", lv: "easy", ex: "Which of 2, 3, 5, 9 divides 144?", kw: "divisibility rules" },
        { t: "模运算 Modular Arithmetic", lv: "mid", ex: "What is 17 mod 5?", kw: "modular arithmetic" },
        { t: "同余方程 Congruences", lv: "hard", ex: "Find the remainder when 2¹⁰ is divided by 3.", kw: "congruence" },
        { t: "余数性质 Remainder Properties", lv: "mid", ex: "A number leaves remainder 1 when divided by 2 and by 3. What is the smallest such positive number?", kw: "remainder" }
      ]},
      { title: "数的表示", leaves: [
        { t: "进制转换 Base Conversion", lv: "mid", ex: "What is the decimal value of the binary number 1011?", kw: "base conversion" },
        { t: "数字和与数位 Digit Sums & Positions", lv: "easy", ex: "What is the sum of the digits of 2⁵ = 32?", kw: "sum of digits" },
        { t: "数位综合问题 Digit-Based Problems", lv: "hard", ex: "What is the 1000th digit to the right of the decimal point in 0.12345678910111213...?", kw: "Champernowne constant digit" }
      ]},
      { title: "高级数论", leaves: [
        { t: "费马小定理 Fermat's Little Theorem", lv: "hard", ex: "By Fermat's Little Theorem, what is 2¹⁰ mod 11?", kw: "Fermat's Little Theorem" },
        { t: "欧拉定理 Euler's Theorem", lv: "hard", ex: "Euler's theorem says a^{φ(n)} ≡ 1 (mod n) for coprime a,n. What is φ(10)?", kw: "Euler's totient theorem" },
        { t: "中国剩余定理 Chinese Remainder Theorem", lv: "hard", ex: "Find the smallest positive x with x ≡ 1 (mod 3) and x ≡ 2 (mod 5).", kw: "Chinese Remainder Theorem" },
        { t: "阶与原根 Order & Primitive Roots", lv: "hard", ex: "What is the order of 2 modulo 7 (the smallest k with 2ᵏ ≡ 1 mod 7)?", kw: "order modulo primitive root" }
      ]},
      { title: "解题技巧", leaves: [
        { t: "因式分解 Factoring (Integers)", lv: "mid", ex: "Factor 2x² − 8 completely.", kw: "factoring integers" },
        { t: "构造法 Construction Method", lv: "hard", ex: "Show there exists a positive integer leaving remainder 2 mod 3 and 3 mod 4; give one such number.", kw: "construction number theory" },
        { t: "枚举与放缩 Enumeration & Bounding", lv: "mid", ex: "How many two-digit numbers have digit sum equal to 10? List and count them.", kw: "enumeration bounding" }
      ]}
    ]
  },
  {
    key: "combo", color: "combo",
    title: "组合 Combinatorics",
    sub: "占比约 10%–20% · 创新题多、重分类讨论",
    shape: "难度分布：<b>双峰型 + 陷阱多</b>。基础计数概率能简单；但递推、鸽巢、复杂分类常在压轴区，且「叙述简单、做起来难、答案易选错」。",
    branches: [
      { title: "计数原理", leaves: [
        { t: "加法原理 Addition Principle", lv: "easy", ex: "A menu has 3 appetizers and 4 mains. How many ways to choose exactly one item?", kw: "addition principle counting" },
        { t: "乘法原理 Multiplication Principle", lv: "easy", ex: "A password uses 2 letters then 2 digits. How many such passwords are possible?", kw: "multiplication principle" },
        { t: "排列 Permutations", lv: "mid", ex: "In how many ways can 3 distinct books be arranged on a shelf?", kw: "permutations" },
        { t: "组合 C(n,k) Combinations C(n,k)", lv: "mid", ex: "How many ways to choose 2 students from a group of 5?", kw: "combinations" },
        { t: "捆绑法（相邻问题） Block Method (Adjacency)", lv: "easy", ex: "In how many ways can 4 people sit in a row if A and B must sit together?", kw: "permutations together block" },
        { t: "插空法（不相邻问题） Gap Method (Non-adjacency)", lv: "easy", ex: "Arrange 3 girls and 2 boys in a row so that no two boys are adjacent. How many ways?", kw: "non-adjacent arrangement" }
      ]},
      { title: "容斥原理", leaves: [
        { t: "两集合容斥 Inclusion–Exclusion (2 Sets)", lv: "mid", ex: "Of 30 students, 18 take math and 15 take science, 10 take both. How many take neither?", kw: "inclusion exclusion two sets" },
        { t: "多集合容斥 Inclusion–Exclusion (Multiple Sets)", lv: "hard", ex: "Count the integers from 1 to 100 that are divisible by 2, 3, or 5, using inclusion–exclusion.", kw: "inclusion exclusion" },
        { t: "补集思想 Complementary Counting", lv: "mid", ex: "How many 3-digit numbers are NOT divisible by 10?", kw: "complementary counting" }
      ]},
      { title: "概率", leaves: [
        { t: "古典概率 Classical Probability", lv: "easy", ex: "A fair die is rolled. What is the probability of rolling a prime number?", kw: "classical probability" },
        { t: "独立事件 Independent Events", lv: "mid", ex: "Two fair coins are flipped. What is the probability that both are heads?", kw: "independent events" },
        { t: "条件概率 Conditional Probability", lv: "hard", ex: "A card is drawn from a standard deck; given it is a face card, what is the probability it is a king?", kw: "conditional probability" },
        { t: "期望值 Expected Value", lv: "hard", ex: "A game pays $2 with probability 1/2 and $0 otherwise. What is the expected payoff?", kw: "expected value" }
      ]},
      { title: "组合技巧", leaves: [
        { t: "鸽巢原理 Pigeonhole Principle", lv: "mid", ex: "Among 13 people, must at least two share a birth month? Explain using the pigeonhole principle.", kw: "pigeonhole principle" },
        { t: "递推关系 Recurrence Relations", lv: "hard", ex: "A staircase of n steps can be climbed 1 or 2 at a time. How many ways for 4 steps?", kw: "recursion staircase" },
        { t: "分类讨论 Casework", lv: "hard", ex: "How many triangles can be formed from 6 points placed on a circle (no three collinear)?", kw: "casework triangles" },
        { t: "1-1 对应 Bijection (1–1 Correspondence)", lv: "hard", ex: "How many subsets does a 4-element set have? (Use the 1–1 correspondence with 4-bit strings.)", kw: "bijection subsets" }
      ]},
      { title: "图论基础", leaves: [
        { t: "路径与连通 Paths & Connectivity", lv: "mid", ex: "In a 3×3 grid of intersections, how many shortest paths go from bottom-left to top-right moving only up or right?", kw: "grid paths" },
        { t: "染色问题 Graph Coloring", lv: "hard", ex: "Color the vertices of a square with 2 colors so that adjacent vertices differ. How many ways?", kw: "graph coloring" },
        { t: "生成函数基础 Generating Functions (Basics)", lv: "hard", ex: "How many ways can you make 4 cents using 1-cent and 2-cent coins? (Enumerate via generating function.)", kw: "generating function" }
      ]}
    ]
  }
];

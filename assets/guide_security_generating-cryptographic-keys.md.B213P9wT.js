import{_ as i,c as a,o as s,V as e}from"./chunks/framework.p90Iz9wz.js";const u=JSON.parse('{"title":"Generating Cryptographic Keys","description":"","frontmatter":{},"headers":[],"relativePath":"guide/security/generating-cryptographic-keys.md","filePath":"guide/security/generating-cryptographic-keys.md","lastUpdated":1707727936000}'),t={name:"guide/security/generating-cryptographic-keys.md"},n=e(`<h1 id="generating-cryptographic-keys" tabindex="-1">Generating Cryptographic Keys <a class="header-anchor" href="#generating-cryptographic-keys" aria-label="Permalink to &quot;Generating Cryptographic Keys&quot;">​</a></h1><p>In the realm of blockchain technology, cryptographic keys play a crucial role in upholding the security and authenticity of data transactions. With Iroha 2, you can create these vital keys to safeguard your digital assets and communications.</p><p>This section describes how to generate keys using the <code>kagami</code> tool, shipped alongside Iroha 2.</p><p>In the future, alternative methods of generating public keys shall be added.</p><h2 id="kagami" tabindex="-1">Generating Cryptographic Keys with Kagami <a class="header-anchor" href="#kagami" aria-label="Permalink to &quot;Generating Cryptographic Keys with Kagami {#kagami}&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Since <code>kagami</code> does not come with a manual page, you can use the <code>--help</code> (<code>-h</code>) command to retrieve a brief summary of all the usable <code>kagami</code> parameters within the CLI you are using.</p></div><p>After <a href="/iroha-2-docs/guide/get-started/install.html">installing Iroha</a>, run the following command from the project&#39;s <code>root</code> directory to generate a new key pair:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo run --bin kagami --release -- crypto</span></span></code></pre></div><p>You can specify a number of different parameters to tailor the generated key pair to your specific needs. The following parameters are available:</p><ul><li><p><code>--algorithm</code> (<code>-a</code>): Specifies the algorithm used for the key pair generation and encryption. If no algorithm is specified, <code>ed25519</code> is used by default. Can be one of the following:</p><ul><li><p><code>ed25519</code> — <abbr title="Elliptic Curve Cryptography">ECC</abbr> an algorithm that utilises the <code>Ed25519</code> curve, offering efficient and secure cryptographic operations for digital signatures and key exchange. If no algorithm is specified in a request, then <code>ed25519</code> is used by default. Learn more:</p><ul><li><a href="https://en.wikipedia.org/wiki/EdDSA#Ed25519:~:text=.-,Ed25519,-%5Bedit%5D" target="_blank" rel="noreferrer">EdDSA &gt; Ed25519 (Wikipedia)</a></li><li><a href="https://ed25519.cr.yp.to/" target="_blank" rel="noreferrer">Ed25519: high-speed high-security signatures</a></li></ul></li><li><p><code>secp256k1</code> — <abbr title="Elliptic Curve Cryptography">ECC</abbr> an algorithm known for its application in blockchain systems like Bitcoin. It provides a robust foundation for secure key generation, digital signatures, and encryption.</p></li></ul><blockquote><p>Learn more:<br><a href="https://en.bitcoin.it/wiki/Secp256k1" target="_blank" rel="noreferrer">Secp256k1 (Bitcoin Wiki)</a></p></blockquote><ul><li><code>bls_small</code> — The Boneh-Lynn-Shacham algorithm with a <em>small</em> parameter configuration. This variant of the <abbr title="Boneh-Lynn-Shacham">BLS</abbr> cryptographic scheme is optimised for efficiency in certain resource-constrained environments while maintaining fundamental security properties.</li></ul><blockquote><p>Learn more:<br><a href="https://en.wikipedia.org/wiki/BLS_digital_signature" target="_blank" rel="noreferrer">BLS digital signature (Wikipedia)</a></p></blockquote><ul><li><code>bls_normal</code> — The Boneh-Lynn-Shacham algorithm with a <em>standard</em> parameter configuration. This configuration of the <abbr title="Boneh-Lynn-Shacham">BLS</abbr> cryptographic scheme offers a balanced approach between efficiency and security, making it suitable for a wide range of applications in blockchain and cryptographic protocols.</li></ul><blockquote><p>Learn more:<br><a href="https://en.wikipedia.org/wiki/BLS_digital_signature" target="_blank" rel="noreferrer">BLS digital signature (Wikipedia)</a></p></blockquote></li><li><p><code>--seed</code> (<code>-s</code>): Specifies a string that serves as a deterministic starting point for the key pair generation. If a seed string is specified, <code>kagami</code> will generate the same key for the same string. If no seed is specified, a random <code>seed</code> value is chosen, and each invocation of <code>kagami crypto</code> will result in a different key. This parameter accepts a valid string of <a href="https://home.unicode.org/" target="_blank" rel="noreferrer">Unicode</a> characters. For example, the seed string can contain not only numeric and latin, but also cyrillic, logographic (e.g., Japanese kanji characters) and ideographic (e.g., emojis) characters, as well as any font-related variations of those characters introduced to Unicode over the years.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If one chooses to use a <code>seed</code>, it must be treated as if it were a password: more randomness and longer seed strings make the cryptographic keys more resilient to <a href="https://en.wikipedia.org/wiki/Dictionary_attack" target="_blank" rel="noreferrer">dictionary attacks</a>.</p></div></li><li><p><code>--private-key</code> (<code>-p</code>): Specifies an existing private key as a string in the <a href="https://github.com/multiformats/multihash" target="_blank" rel="noreferrer"><code>multihash</code></a> format that is used to generate a <em>public</em> key.</p></li><li><p><code>--json</code> (<code>-j</code>): Specifies that the output must be generated in the JSON format, which is mostly helpful for copy-and-pasting into the <code>config.json</code> file.</p></li><li><p><code>--compact</code> (<code>-c</code>): Specifies that the output private and public keys are displayed on separate lines and are not labeled.</p></li></ul><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-oXUNI" id="tab-k9TifsM" checked="checked"><label for="tab-k9TifsM">No parameters</label><input type="radio" name="group-oXUNI" id="tab-_npkOd3"><label for="tab-_npkOd3">--algorithm</label><input type="radio" name="group-oXUNI" id="tab-HA9Pc-2"><label for="tab-HA9Pc-2">--seed</label><input type="radio" name="group-oXUNI" id="tab-wa2vsIn"><label for="tab-wa2vsIn">--private-key</label><input type="radio" name="group-oXUNI" id="tab-eenCjCZ"><label for="tab-eenCjCZ">--json</label><input type="radio" name="group-oXUNI" id="tab-ylm20KQ"><label for="tab-ylm20KQ">--compact</label><input type="radio" name="group-oXUNI" id="tab-aDRI2XA"><label for="tab-aDRI2XA">Combination of parameters</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo run --bin kagami crypto</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Possible Output (same layout, different keys)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multihash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;ed01206B0F56F58761060056355DBA0E0FC489CFB2F974481ED64873082E6032796235&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ed25519</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;F71EA9D897C4338CBF4F1DC7B492AAD0BF6CE896B803D7CDB9CF25ECC15109826B0F56F58761060056355DBA0E0FC489CFB2F974481ED64873082E6032796235&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kagami crypto -a secp256k1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Possible output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multihash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;e70121022A9D6E0D54022C0E2752E43ADD91ADA28259E1F2CE0C6D4E9183FB2882DE6749&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">secp256k1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;7687B1433FB6731E6DC635A376B3EB3B5FCD1E02C9775C1642E7FD5DA035EC75&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kagami crypto -s </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1729</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Exact output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multihash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;ed0120B678073CFAE6E247A58B442661C7DA0E13BAC5031CBC6343EF566B8718D47D04&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ed25519</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;2669BB1099477B970E1D7D7C54E345A64A54213FCFBA2465CBCD6D4E5091A71DB678073CFAE6E247A58B442661C7DA0E13BAC5031CBC6343EF566B8718D47D04&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kagami crypto -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2669</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BB1099477B970E1D7D7C54E345A64A54213FCFBA2465CBCD6D4E5091A71DB678073CFAE6E247A58B442661C7DA0E13BAC5031CBC6343EF566B8718D47D04</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Exact output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multihash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;ed0120B678073CFAE6E247A58B442661C7DA0E13BAC5031CBC6343EF566B8718D47D04&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ed25519</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;2669BB1099477B970E1D7D7C54E345A64A54213FCFBA2465CBCD6D4E5091A71DB678073CFAE6E247A58B442661C7DA0E13BAC5031CBC6343EF566B8718D47D04&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo run --bin kagami crypto -j</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Possible output</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;public_key&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ed0120B678073CFAE6E247A58B442661C7DA0E13BAC5031CBC6343EF566B8718D47D04&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;private_key&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    &quot;digest_function&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ed25519&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    &quot;payload&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2669bb1099477b970e1d7d7c54e345a64a54213fcfba2465cbcd6d4e5091a71db678073cfae6e247a58b442661c7da0e13bac5031cbc6343ef566b8718d47d04&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo run --bin kagami crypto -c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Possible output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ed0120B678073CFAE6E247A58B442661C7DA0E13BAC5031CBC6343EF566B8718D47D04</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2669BB1099477B970E1D7D7C54E345A64A54213FCFBA2465CBCD6D4E5091A71DB678073CFAE6E247A58B442661C7DA0E13BAC5031CBC6343EF566B8718D47D04</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ed25519</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo run --bin kagami crypto -a bls_normal -s </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Exact output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multihash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;ea01610402A54ABCC40819F15E3553CC8D42D628EEAD7E1B10724BD2AFE523A7C0446EB1CB3F14D4500BD68C997784136FD056BA04215DFD2D3FDC7883B43AE94AC52B7D01525F5A80B41C01701502B46DBB9F0384CC7BE037DC2CBC928014E52A4C5C3B&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bls_normal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: &quot;0000000000000000000000000000000035D9120A174E35E966DD92DE90B2446D4B060C8B72018B3917A1C97D7E93EAEC&quot;</span></span></code></pre></div></div></div><h2 id="other-operations-with-kagami" tabindex="-1">Other Operations with Kagami <a class="header-anchor" href="#other-operations-with-kagami" aria-label="Permalink to &quot;Other Operations with Kagami&quot;">​</a></h2><h3 id="_1-building-kagami" tabindex="-1">1. Building <code>kagami</code> <a class="header-anchor" href="#_1-building-kagami" aria-label="Permalink to &quot;1. Building \`kagami\`&quot;">​</a></h3><p>The Iroha 2 node binary and all supporting tools are supplied in the official docker image. However, using it like this is cumbersome, as <code>kagami</code> is meant to be used as a standalone external tool, so building it from a source may be helpful.</p><p>To build <code>kagami</code>, run the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo build --bin kagami</span></span></code></pre></div><p>This will produce a single statically linked executable in the target/debug directory, that still links dynamically against the system-provided standard C-library.</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>Iroha and all supporting tools can also be built to statically link against the musl standard library, which allows the application to run on any POSIX-compliant ELF-capable system (all GNU+Linux distributions, some BSD variants).</p></div><h3 id="_2-installing-the-source-built-kagami-into-bin" tabindex="-1">2. Installing the source-built <code>kagami</code> into <code>/bin</code> <a class="header-anchor" href="#_2-installing-the-source-built-kagami-into-bin" aria-label="Permalink to &quot;2. Installing the source-built \`kagami\` into \`/bin\`&quot;">​</a></h3><p>There are multiple ways to make your command line be able to use the <code>kagami</code> version that you have just compiled. One of the easiest ways that should work on most systems is to move or link the binary into the <code>/bin</code> directory on UNIX systems.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo mv target/debug/kagami /bin</span></span></code></pre></div><h3 id="_3-moving-kagami-to-the-local-bin-directory" tabindex="-1">3. Moving <code>kagami</code> to the <code>.local/bin</code> directory <a class="header-anchor" href="#_3-moving-kagami-to-the-local-bin-directory" aria-label="Permalink to &quot;3. Moving \`kagami\` to the \`.local/bin\` directory&quot;">​</a></h3><p>To circumvent the requirement of having the binary in the global binary folder, and thus necessarily exposing the binary to all other users, as well as requiring root authentication (which is not always available), one can instead install the application as a regular user.</p><p>To move <code>kagami</code> to the authenticated user&#39;s <code>.local/bin</code> directory, making it uniquely accessible only by that user, run the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv target/debug/kagami ~/.local/bin</span></span></code></pre></div><p>This method works on most GNU Linux distributions, but is not guaranteed to do so. If it doesn&#39;t, consult the next subtopic.</p><h4 id="making-the-username-local-bin-directory-available-to-the-shell" tabindex="-1">Making the <code>&lt;username&gt;/.local/bin</code> directory available to the shell <a class="header-anchor" href="#making-the-username-local-bin-directory-available-to-the-shell" aria-label="Permalink to &quot;Making the \`&lt;username&gt;/.local/bin\` directory available to the shell&quot;">​</a></h4><p>To make the <code>&lt;username&gt;/.local/bin</code> directory explicitly available to your shell&#39;s <code>.rc</code> file, perform the following:</p><ol><li>Check if <code>kagami</code> is available by running the following:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whereis kagami</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kagami:</span></span></code></pre></div><ol start="2"><li>Depending on the shell that you are using, perform one of the following:</li></ol><ul><li><p><strong>If using <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer">Bash</a></strong>: Fix the <code>PATH</code> variable for the shell and then reload the <code>.bashrc</code> script by running the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echo &quot;export PATH=&#39;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/.local/bin:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source ~/.bashrc</span></span></code></pre></div></li><li><p><strong>If using <a href="https://www.zsh.org/" target="_blank" rel="noreferrer">Zsh</a></strong>: Fix the <code>PATH</code> variable for the shell and reload the <code>.zshrc</code> script by running the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echo &quot;export PATH=&#39;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/.local/bin:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source ~/.zshrc</span></span></code></pre></div></li><li><p><strong>If using <a href="https://fishshell.com/" target="_blank" rel="noreferrer">fish</a></strong>: Fix the <code>PATH</code> variable for the shell variable permanently by running the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fish_add_path ~/.local/bin</span></span></code></pre></div></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>In addition to the methods listed above, consult documentation for the shell you&#39;re using or consider adding the <code>PATH</code> variant to your terminal&#39;s session configuration.</p></div>`,34),l=[n];function h(p,o,r,k,d,c){return s(),a("div",null,l)}const y=i(t,[["render",h]]);export{u as __pageData,y as default};

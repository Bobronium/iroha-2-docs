import{_ as s,c as i,o as a,V as n}from"./chunks/framework.p90Iz9wz.js";const u=JSON.parse('{"title":"Peer Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure/peer-configuration.md","filePath":"guide/configure/peer-configuration.md","lastUpdated":1707727936000}'),e={name:"guide/configure/peer-configuration.md"},t=n(`<h1 id="peer-configuration" tabindex="-1">Peer Configuration <a class="header-anchor" href="#peer-configuration" aria-label="Permalink to &quot;Peer Configuration&quot;">​</a></h1><p>The peer configuration file (<code>configs/peer/config.json</code>) determines how your blockchain operates.</p><p>Here&#39;s an example of how peer configuration file looks like:</p><details class="details custom-block"><summary>Peer configuration example</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;PUBLIC_KEY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;PRIVATE_KEY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;DISABLE_PANIC_TERMINAL_COLORS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;KURA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;INIT_MODE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;strict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;BLOCK_STORE_PATH&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;BLOCKS_PER_STORAGE_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ACTOR_CHANNEL_CAPACITY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;DEBUG_OUTPUT_NEW_BLOCKS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;SUMERAGI&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;KEY_PAIR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;PEER_ID&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;BLOCK_TIME_MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;TRUSTED_PEERS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;COMMIT_TIME_LIMIT_MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;MAX_TRANSACTIONS_IN_BLOCK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ACTOR_CHANNEL_CAPACITY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;GOSSIP_BATCH_SIZE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;GOSSIP_PERIOD_MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;TORII&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;P2P_ADDR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;API_URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;TELEMETRY_URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;MAX_TRANSACTION_SIZE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32768</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;MAX_CONTENT_LEN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16384000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;FETCH_SIZE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;QUERY_IDLE_TIME_MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;BLOCK_SYNC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;GOSSIP_PERIOD_MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;BLOCK_BATCH_SIZE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ACTOR_CHANNEL_CAPACITY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;QUEUE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;MAX_TRANSACTIONS_IN_QUEUE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65536</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;MAX_TRANSACTIONS_IN_QUEUE_PER_USER&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65536</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;TRANSACTION_TIME_TO_LIVE_MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">86400000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;FUTURE_THRESHOLD_MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;LOGGER&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;MAX_LOG_LEVEL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INFO&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;TELEMETRY_CAPACITY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;COMPACT_MODE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;LOG_FILE_PATH&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;TERMINAL_COLORS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;GENESIS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ACCOUNT_PUBLIC_KEY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ACCOUNT_PRIVATE_KEY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;WSV&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ASSET_METADATA_LIMITS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_len&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1048576</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_entry_byte_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4096</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ASSET_DEFINITION_METADATA_LIMITS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_len&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1048576</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_entry_byte_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4096</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ACCOUNT_METADATA_LIMITS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_len&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1048576</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_entry_byte_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4096</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;DOMAIN_METADATA_LIMITS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_len&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1048576</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_entry_byte_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4096</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;IDENT_LENGTH_LIMITS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;min&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;TRANSACTION_LIMITS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_instruction_number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4096</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;max_wasm_size_bytes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4194304</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;WASM_RUNTIME_CONFIG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;FUEL_LIMIT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;MAX_MEMORY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">524288000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;NETWORK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ACTOR_CHANNEL_CAPACITY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;TELEMETRY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;NAME&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;MIN_RETRY_PERIOD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;MAX_RETRY_DELAY_EXPONENT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;SNAPSHOT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;CREATE_EVERY_MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;DIR_PATH&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;CREATION_ENABLED&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note that for convenient container deployment, configuration options specified via environment variables always override the corresponding values in the configuration file. This way, you can have a basic configuration file and also configure some options in a <code>docker-compose.yml</code> or in your shell&#39;s environment file (<code>.bashrc</code>, <code>.zshrc</code>, etc.).</p></div><p>Some of the configuration options are required, while others are used for fine-tuning. When you create a new peer, you are required to provide the following:</p><ul><li><p><a href="#public-and-private-keys">The peer&#39;s Public and private keys</a> (<code>PUBLIC_KEY</code> and <code>PRIVATE_KEY</code>)</p></li><li><p><a href="#iroha-public-addresses">Iroha public addresses</a> (<code>P2P_ADDR</code>, <code>API_URL</code>, <code>TELEMETRY_URL</code>)</p></li><li><p><a href="#trusted-peers">Trusted peers</a> (<code>TRUSTED_PEERS</code>)</p></li><li><p><a href="#genesis">Public and private keys for the genesis account</a> (<code>ACCOUNT_PUBLIC_KEY</code> and <code>ACCOUNT_PRIVATE_KEY</code>)</p></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Configuration options have different underlying types and default values, which are denoted in code as types wrapped in a single <code>Option&lt;..&gt;</code> or in a double <code>Option&lt;Option&lt;..&gt;&gt;</code>. Refer to <a href="./configuration-types.html">configuration types</a> for details.</p></div><h2 id="generation" tabindex="-1">Generation <a class="header-anchor" href="#generation" aria-label="Permalink to &quot;Generation&quot;">​</a></h2><p>You can use <code>kagami</code> to generate the default peer configuration:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kagami config peer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> peer-config.json</span></span></code></pre></div><h2 id="public-and-private-keys" tabindex="-1">Public and private keys <a class="header-anchor" href="#public-and-private-keys" aria-label="Permalink to &quot;Public and private keys&quot;">​</a></h2><p>The <code>configs/peer/config.json</code> peer configuration file should contain a pair of the user&#39;s public <code>PUBLIC_KEY</code> and private <code>PRIVATE_KEY</code> cryptographic keys for their account&#39;s <code>ACCOUNT_ID</code>.</p><p>For details on cryptographic keys, see <a href="./../security/public-key-cryptography.html">Public Key Cryptography</a>.</p><h2 id="trusted-peers" tabindex="-1">Trusted Peers <a class="header-anchor" href="#trusted-peers" aria-label="Permalink to &quot;Trusted Peers&quot;">​</a></h2><p>Iroha is a blockchain ledger. In order for it to work optimally and be Byzantine-fault tolerant with the maximum number of faults allowed, it needs to be started with a set number of peers: <code>4</code>, <code>7</code>, <code>10</code>, ... <code>3f+1</code>, where <code>f</code> is the allowed number of faults.</p><p>So usually, when you want to start an Iroha deployment, you should already know a number of peers that you can trust and join their blockchain. The way it works in the examples is that you just specify in four <code>config.json</code> files four peers with their public keys and API addresses.</p><p>Since Iroha has no automatic peer discovery, the only other way to make peers known to each other is to use the <code>iroha_client_cli</code> to <a href="./peer-management.html#registering-peers">register new peers</a>). This is not too difficult with the provided client libraries. With Python&#39;s <a href="https://www.crummy.com/software/BeautifulSoup/" target="_blank" rel="noreferrer">Beautiful Soup</a>, the curated list of peers can be updated, registered, and un-registered on its own.</p><p>The list of trusted peers is a part of <code>SUMERAGI</code> configuration. Here&#39;s an example of <code>SUMERAGI_TRUSTED_PEERS</code> environment variable to configure trusted peers:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;[{&quot;address&quot;:&quot;iroha0:1337&quot;, &quot;public_key&quot;: &quot;ed01201c61faf8fe94e253b93114240394f79a607b7fa55f9e5a41ebec74b88055768b&quot;}, {&quot;address&quot;:&quot;iroha1:1338&quot;, &quot;public_key&quot;: &quot;ed0120cc25624d62896d3a0bfd8940f928dc2abf27cc57cefeb442aa96d9081aae58a1&quot;}, {&quot;address&quot;: &quot;iroha2:1339&quot;, &quot;public_key&quot;: &quot;ed0120faca9e8aa83225cb4d16d67f27dd4f93fc30ffa11adc1f5c88fd5495ecc91020&quot;}, {&quot;address&quot;: &quot;iroha3:1340&quot;, &quot;public_key&quot;: &quot;ed01208e351a70b6a603ed285d666b8d689b680865913ba03ce29fb7d13a166c4e7f1f&quot;}]&#39;</span></span></code></pre></div><h2 id="iroha-public-addresses" tabindex="-1">Iroha Public Addresses <a class="header-anchor" href="#iroha-public-addresses" aria-label="Permalink to &quot;Iroha Public Addresses&quot;">​</a></h2><p><code>TORII</code> is the module in charge of handling incoming and outgoing connections.</p><h3 id="api-url" tabindex="-1"><code>API_URL</code> <a class="header-anchor" href="#api-url" aria-label="Permalink to &quot;\`API_URL\`&quot;">​</a></h3><p>The <code>API_URL</code> is the location to which the client(s) make their requests. You can also use it to change some peer-specific configuration options.</p><p>Most of the time, the only reason to change the <code>API_URL</code> is to change the port, in case <code>8080</code> is either closed, or if you want to randomise ports to avoid certain kinds of attacks.</p><h3 id="p2p-addr" tabindex="-1"><code>P2P_ADDR</code> <a class="header-anchor" href="#p2p-addr" aria-label="Permalink to &quot;\`P2P_ADDR\`&quot;">​</a></h3><p>The <code>P2P_ADDR</code> is the internal address used for communication between peers. This address should be included in the <code>TRUSTED_PEERS</code> section of the configuration file.</p><h3 id="telemetry-url" tabindex="-1"><code>TELEMETRY_URL</code> <a class="header-anchor" href="#telemetry-url" aria-label="Permalink to &quot;\`TELEMETRY_URL\`&quot;">​</a></h3><p>The <code>TELEMETRY_URL</code> is used to specify the prometheus endpoint address. It&#39;s set by adding <code>&quot;TELEMETRY_URL&quot;: &quot;127.0.0.1:8180&quot;</code> to the <code>TORII</code> section of the configuration file.</p><p>It&#39;s not meant to be human-readable. However, a <code>GET</code> request to the <code>127.0.0.1:8180/status</code> will give you a JSON-encoded representation of the top-level metrics, while a <code>GET</code> request to <code>127.0.0.1:8180/metrics</code> will give you a (somewhat verbose) list of all available metrics gathered in Iroha. You might want to change this if you&#39;re having trouble gathering metrics using <code>prometheus</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Learn how to <a href="/iroha-2-docs/guide/advanced/metrics.html">monitor Iroha performance</a> using prometheus.</p></div><h2 id="genesis" tabindex="-1">Genesis <a class="header-anchor" href="#genesis" aria-label="Permalink to &quot;Genesis&quot;">​</a></h2><p>When you configure a peer, you have to provide private and public keys for the genesis account.</p><p>You can do this via the configuration file (<code>ACCOUNT_PUBLIC_KEY</code>, <code>ACCOUNT_PRIVATE_KEY</code>) or environment variables (<code>IROHA_GENESIS_ACCOUNT_PUBLIC_KEY</code>, <code>IROHA_GENESIS_ACCOUNT_PRIVATE_KEY</code>).</p><p>To learn more about genesis block, genesis account, and cryptographic keys, see the following:</p><ul><li><a href="./genesis.html">Genesis Block</a></li><li><a href="./../security/public-key-cryptography.html">Public Key Cryptography</a></li></ul><p>Aside from the public and private keys for the genesis account, which are required configuration options, you can also fine-tune other genesis block configurations, such as:</p><ul><li><code>WAIT_FOR_PEERS_RETRY_COUNT_LIMIT</code>: the number of attempts to connect to peers before genesis block is submitted</li><li><code>WAIT_FOR_PEERS_RETRY_PERIOD_MS</code>: how long to wait before retrying a connection to peers</li><li><code>GENESIS_SUBMISSION_DELAY_MS</code>: the delay before the genesis block submission after the minimum number of peers were discovered.</li></ul><h2 id="logger" tabindex="-1">Logger <a class="header-anchor" href="#logger" aria-label="Permalink to &quot;Logger&quot;">​</a></h2><p>Let&#39;s cover the most useful <code>LOGGER</code> configurations, <code>MAX_LOG_LEVEL</code> and <code>LOG_FILE_PATH</code>.</p><h3 id="max-log-level" tabindex="-1"><code>MAX_LOG_LEVEL</code> <a class="header-anchor" href="#max-log-level" aria-label="Permalink to &quot;\`MAX_LOG_LEVEL\`&quot;">​</a></h3><p>The <code>MAX_LOG_LEVEL</code> is used to determine which messages are logged.</p><p>With <code>&quot;MAX_LOG_LEVEL&quot;: &quot;WARN&quot;</code> you won&#39;t get any messages unless they are either a warning or an error. Beside <code>WARN</code>, other available options are:</p><ul><li><code>TRACE</code> (log every time you enter a function)</li><li><code>DEBUG</code> (use when you know something went wrong)</li><li><code>INFO</code> (the default)</li><li><code>WARN</code> (log everything that could be an error)</li><li><code>ERROR</code> (to silence any logging except for error messages)</li></ul><h3 id="log-file-path" tabindex="-1"><code>LOG_FILE_PATH</code> <a class="header-anchor" href="#log-file-path" aria-label="Permalink to &quot;\`LOG_FILE_PATH\`&quot;">​</a></h3><p>Another useful option is <code>&quot;LOG_FILE_PATH&quot;: bunyan.json</code>. It creates (if it didn&#39;t already exist) a file called <code>bunyan.json</code> that contains the message log in a structured format.</p><p>This is extremely useful for two reasons. Firstly, you can use the <code>bunyan</code> log viewer to filter information more precisely than Iroha would allow you to do. Do you only want messages from a specific module or package? You can do that with <code>bunyan</code>. Secondly, while copying logs is not too big of a problem if your instance is just a small setup, for bigger setups the log will be larger. Having it saved to a file makes much more sense in that case.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You can also set <code>LOG_FILE_PATH</code> to <code>/dev/stdout</code> if you want to use bunyan&#39;s logging facilities directly without saving the output.</p></div><h2 id="kura" tabindex="-1">Kura <a class="header-anchor" href="#kura" aria-label="Permalink to &quot;Kura&quot;">​</a></h2><p><em>Kura</em> is the persistent storage engine of Iroha (Japanese for <em>warehouse</em>). The <code>BLOCK_STORE_PATH</code> specifies where the blocks are stored. You can change it to a custom location if for some reason the default location (<code>./storage</code>) is not available or desirable.</p>`,50),l=[t];function h(p,k,o,r,E,d){return a(),i("div",null,l)}const g=s(e,[["render",h]]);export{u as __pageData,g as default};

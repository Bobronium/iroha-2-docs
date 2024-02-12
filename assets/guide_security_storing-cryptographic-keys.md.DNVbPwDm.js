import{_ as e,c as t,o as s,V as a}from"./chunks/framework.p90Iz9wz.js";const r="/iroha-2-docs/assets/KeePassXC.BngrXRS-.png",o="/iroha-2-docs/assets/keepassxc_ssh_agent.AbN915DX.png",i="/iroha-2-docs/assets/keepassxc_private_key.BBWlfudY.png",n="/iroha-2-docs/assets/keepassxc_pk_agent.Ds-M6u5k.png",b=JSON.parse('{"title":"Storing Cryptographic Keys","description":"","frontmatter":{},"headers":[],"relativePath":"guide/security/storing-cryptographic-keys.md","filePath":"guide/security/storing-cryptographic-keys.md","lastUpdated":1707727936000}'),c={name:"guide/security/storing-cryptographic-keys.md"},h=a('<h1 id="storing-cryptographic-keys" tabindex="-1">Storing Cryptographic Keys <a class="header-anchor" href="#storing-cryptographic-keys" aria-label="Permalink to &quot;Storing Cryptographic Keys&quot;">​</a></h1><p>Your sensitive data only remains private if you adopt <abbr title="Operational Security">OPSEC</abbr> practices to protect the cryptographic keys. Social engineering threats, where someone posing as a figure with authority tries to manipulate you into giving them your private cryptographic key, are real. Always be cautious and avoid sharing your private key, treating it as you would your apartment keys—reserved for trusted individuals only.</p><p>For more information on <abbr title="Operational Security">OPSEC</abbr> and its best practices, see <a href="./operational-security.html">Operational Security</a>.</p><h2 id="storing-cryptographic-keys-digitally" tabindex="-1">Storing Cryptographic Keys Digitally <a class="header-anchor" href="#storing-cryptographic-keys-digitally" aria-label="Permalink to &quot;Storing Cryptographic Keys Digitally&quot;">​</a></h2><p>When it comes to protecting cryptographic keys digitally, mainly only two approaches—<a href="https://www.ssh.com/" target="_blank" rel="noreferrer">SSH</a> and <a href="https://www.gnupg.org/" target="_blank" rel="noreferrer">GPG</a>—are available. These methods provide layers of security to prevent unauthorized access to your cryptographic keys.</p><p>Many of Iroha 2&#39;s architectural decisions have been influenced by the principles of the <strong>Secure Shell</strong> (<code>SSH</code>) protocol, which is why this section primarily focuses on the <code>SSH</code> approach, offering instructions on how to effectively implement the protocol for storing your cryptographic keys within the Iroha 2 ecosystem.</p><h3 id="using-ssh-and-ssh-agent" tabindex="-1">Using SSH and SSH Agent <a class="header-anchor" href="#using-ssh-and-ssh-agent" aria-label="Permalink to &quot;Using SSH and SSH Agent&quot;">​</a></h3><p><strong>Secure Shell Protocol</strong> (<code>SSH</code>) is a cryptographic network protocol that serves as a virtual gateway, enabling secure access to remote machines via potentially not-so-secure networks by using SSH keys—access credentials. It provides an efficient way to remotely interact with systems without the necessity of physical presence. In this context, <code>SSH</code> offers two primary authentication mechanisms: the conventional password-based approach and the more secure public-private key pair method.</p><p>For more information on <code>SSH</code>, see <a href="https://www.ssh.com/academy/ssh" target="_blank" rel="noreferrer">the related SSH Academy topic</a>.</p><p>To streamline the login process and bypass the need for repetitive input, it is possible to pair the <code>SSH</code> keys with the <strong>SSH Agent</strong> (<code>ssh-agent</code>)—the assistant program that remembers your <code>SSH</code> keys and/or password for the duration of a session. This setup permits the <code>SSH</code> gateway to effortlessly access the keys whenever it connects to other machines.</p><p>The workflow here is as follows: you have your public key stored on a remote system and keep your private key secure. Whenever you want to access a remote system, the <code>ssh-agent</code> steps in to communicate your <em>public</em> key to the accessed system. The remote system then sends back a <a href="https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication" target="_blank" rel="noreferrer">challenge</a> that only your <em>private</em> key can properly respond to. Your <code>ssh-agent</code> handles this challenge by using your <em>private</em> key and sends the correct response back to the remote system. If the response matches what the system expected, you&#39;re granted access.</p><p>The beauty of the <code>ssh-agent</code> is that it holds onto your private key during your session, so there is no need to keep entering your password or private key passphrase every time you connect to a remote system.</p><p>For more information on the <code>ssh-agent</code>, see <a href="https://www.ssh.com/academy/ssh/agent" target="_blank" rel="noreferrer">the related SSH Academy topic</a>.</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>For a detailed overview of the <code>SSH</code> protocol and the <code>ssh-agent</code> tool, see the following <a href="https://www.ssh.com/academy" target="_blank" rel="noreferrer">SSH Academy</a> topics:</p><ul><li><a href="https://www.ssh.com/academy/ssh" target="_blank" rel="noreferrer">What is SSH (Secure Shell)?</a></li><li><a href="https://www.ssh.com/academy/ssh/agent" target="_blank" rel="noreferrer">ssh-agent: How to configure ssh-agent, agent forwarding, &amp; agent protocol</a></li></ul></div><h3 id="adding-a-password-manager-program" tabindex="-1">Adding a Password Manager Program <a class="header-anchor" href="#adding-a-password-manager-program" aria-label="Permalink to &quot;Adding a Password Manager Program&quot;">​</a></h3><p>It is recommended to enhance the security of your <code>SSH</code> keys by protecting them with a password, which acts as an additional obstacle in the way of malicious parties aiming to obtain your sensitive information.</p><p>A variety of password managers can be used to store user passwords and <code>SSH</code> keys temporarily. For the sake of clarity, <a href="https://keepass.info/" target="_blank" rel="noreferrer">KeePass</a> is used as an example password manager, specifically, the <a href="https://keepassxc.org/" target="_blank" rel="noreferrer">KeePassXC</a> port running on Linux-based operating systems.</p><p>For instructions on how to set up KeePassXC see the <a href="#configuring-keepassxc">Configuring KeePassXC</a> section below.</p><p><img src="'+r+'" alt="KeePassXC:  screen UI"></p><p>KeePassXC offers enhanced security, flexibility, and control. It not only stores passwords but also the <code>SSH</code> keys. When used for key storage, this password manager provides the <code>ssh-agent</code> with the stored keys, which are then promptly removed from its memory once the KeePassXC window is closed.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Theoretically, any of the KeePass ports <a href="https://keepass.info/download.html" target="_blank" rel="noreferrer">listed on the official website</a> can be utilized for the key storage purposes. We recommend any of the following: <a href="https://www.keepassx.org/" target="_blank" rel="noreferrer">KeePassX</a> or <a href="https://keepassxc.org/" target="_blank" rel="noreferrer">KeePassXC</a>.</p></div><h4 id="configuring-keepassxc" tabindex="-1">Configuring KeePassXC <a class="header-anchor" href="#configuring-keepassxc" aria-label="Permalink to &quot;Configuring KeePassXC&quot;">​</a></h4><p>To configure KeePassXC, perform the following steps:</p><ol><li><p>Launch KeePassXC, then go to <strong>Tools</strong> &gt; <strong>Settings</strong>, or select the <strong>Gear</strong> button from the top UI panel.</p></li><li><p>In the <strong>Application Settings</strong> tab that appears, select <strong>SSH Agent</strong> from the left menu, and then select the <strong>Enable SSH Agent integration</strong> checkbox.</p><div class="info custom-block"><p class="custom-block-title">Show reference screenshot</p><p><img src="'+o+'" alt="KeePassXC  tab: Enabling SSH Agent"></p></div></li><li><p>Create a new KeePassXC Database. For instructions, see <a href="https://keepassxc.org/docs/KeePassXC_UserGuide#_creating_your_first_database" target="_blank" rel="noreferrer">KeePassXC User Guide &gt; Creating Your First Database</a>.</p></li><li><p>For every key that you would like to store in the KeePassXC Database you created, perform the following steps:</p><ul><li><p>Add a new entry in the database. For instructions, see <a href="https://keepassxc.org/docs/KeePassXC_UserGuide#_creating_your_first_database" target="_blank" rel="noreferrer">KeePassXC User Guide &gt; Creating Your First Database</a>.</p></li><li><p>When adding a new entry, attach the file containing the key by doing the following: select <strong>Advanced</strong> from the left menu, then select <strong>Add</strong> in the <strong>Attachments</strong> section, choose the required file in the <strong>Select files</strong> window that appears.</p></li><li><p>When adding a new entry, select <strong>SSH Agent</strong> from the left menu, then select the key file you added from the <strong>Attachment</strong> menu in the <strong>Private key</strong> section; then select the following checkboxes:</p><ul><li><p><strong>Add key to agent when database is opened/unlocked</strong></p></li><li><p><strong>Remove key from agent when database is closed/locked</strong></p></li><li><p><strong>Require user confirmation when this key is used</strong></p></li></ul></li><li><p>If necessary, make other changes to the entry.</p></li><li><p>When ready, select <strong>OK</strong> to save the entry.</p></li></ul><details class="details custom-block"><summary>Show reference screenshots</summary><p><img src="'+i+'" alt="KeePassXC  tab: Adding a private key attachment"></p><p><img src="'+n+'" alt="KeePassXC  tab: Adding a private key attachment"></p></details></li></ol><h5 id="expected-results" tabindex="-1">Expected Results <a class="header-anchor" href="#expected-results" aria-label="Permalink to &quot;Expected Results&quot;">​</a></h5><ul><li><p>Cryptographic and <code>shh</code> keys are stored as entries in a KeePassXC Database that can be accessed while the KeePassXC window is open.</p></li><li><p>Stored cryptographic and <code>ssh</code> keys can be used whenever they are required for authorization.</p></li><li><p>Stored cryptographic and <code>ssh</code> keys are removed from the <code>ssh-agent</code> once the KeePassXC window is closed.</p></li></ul><div class="info custom-block"><p class="custom-block-title">Note</p><p>Without enabling the <strong>Require user confirmation when this key is used</strong> option, the <code>ssh-agent</code> may not monitor the process that provided it with a key. In the event that the password manager process is terminated by malware or a system service through a <code>SIGKILL</code> signal, the key is likely to remain in the <code>ssh-agent</code>, as Unix system programs cannot intercept <code>SIGKILL</code>.</p></div><h2 id="storing-cryptographic-keys-physically" tabindex="-1">Storing Cryptographic Keys Physically <a class="header-anchor" href="#storing-cryptographic-keys-physically" aria-label="Permalink to &quot;Storing Cryptographic Keys Physically&quot;">​</a></h2><p>For those who seek the highest level of offline security, the option of storing cryptographic keys physically ensures that the keys remain completely disconnected from digital networks, thus minimizing the risk of unauthorized access. Acknowledging the physical option underscores our commitment to catering to diverse security needs.</p><h3 id="using-a-hardware-key" tabindex="-1">Using a Hardware Key <a class="header-anchor" href="#using-a-hardware-key" aria-label="Permalink to &quot;Using a Hardware Key&quot;">​</a></h3><p>Our team considers hardware keys to be one of the best safety measures. A hardware key—a compact device that connects via a USB port and has a size of a typical flash drive—only processes security-related events when it is connected to a machine. This allows you to easily disconnect the device in case of a security breach, or simply reconnect it to a different machine whenever it is required.</p><p>However, since there are many brands of hardware keys—each with their unique APIs—it is important to research the market to find the key that best suits your needs.</p><p>So far, our team has enternally tested the <a href="https://www.yubico.com/il/product/yubikey-5c/" target="_blank" rel="noreferrer">YubiKey 5C</a> hardware key that proved to have many positive features, including versatile API functionality.</p><p>However, there&#39;s a potential drawback to consider. Implementing the <a href="https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication" target="_blank" rel="noreferrer">HMAC challenge-response authentication</a> and storing a corresponding <em>private</em> key for this response could create a vulnerability. This setup might inadvertently enable attackers to make educated guesses about the information stored within the YubiKey 5C&#39;s memory, thereby compromising the overall security.</p><p>Luckily, this vulnerability can be mitigated by adopting an alternative approach to utilizing the YubiKey 5C. The idea is to use YubiKey 5C to securely access a KeePassXC database storing your cryptographic and <code>SSH</code> keys. This method can even be considered beneficial, since it surpasses the security of most passwords and makes it necessary for the malicious party to be in possession of your hardware key in case the KeePassXC database is leaked.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>To read more about <em>the method above</em>, see the answer by one of the KeePassXC developers—<a href="https://github.com/phoerious" target="_blank" rel="noreferrer">Janek Bevendorff</a>—to the following StackExchange question:</p><p><a href="https://security.stackexchange.com/questions/201345/is-it-reasonable-to-use-keepassxc-with-yubikey/258414#258414" target="_blank" rel="noreferrer">Is it reasonable to use KeePassXC with YubiKey?</a></p></div><h3 id="using-a-mnemonic-phrase" tabindex="-1">Using a Mnemonic Phrase <a class="header-anchor" href="#using-a-mnemonic-phrase" aria-label="Permalink to &quot;Using a Mnemonic Phrase&quot;">​</a></h3><p>Alternatively, you can memorize a private key as a series of words, known as a <em>mnemonic phrase</em>. This method, used in many wallets, requires remembering around 25 specific words. You can generate these words using the <a href="https://xkpasswd.net/s/" target="_blank" rel="noreferrer">XKCD password generator</a>.</p>',38),p=[h];function l(d,g,y,u,m,f){return s(),t("div",null,p)}const w=e(c,[["render",l]]);export{b as __pageData,w as default};

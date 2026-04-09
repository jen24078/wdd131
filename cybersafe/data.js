export const TOPICS = {
  "phishing-attacks": {
    title:  'Phishing — Don\'t Take the Bait',
    desc:   'Phishing is when scammers send fake emails or texts pretending to be a trusted organization (like your bank or university) to trick you into revealing personal information or clicking malicious links.',
    stats: [
      { label: 'Involved in breaches', val: '36%' },
      { label: 'Targeting students',   val: 'High' },
      { label: 'Time to verify',       val: '0 mins' },
    ],
    points: [
      'Always check the sender\'s actual email address, not just the display name.',
      'Beware of urgent language demanding immediate action or threatening account closure.',
      'Look out for generic greetings like "Dear Customer" instead of your actual name.',
      'Hover over links to see the real destination URL before clicking them.',
      'If it looks suspicious, contact the organization directly using a known, official website.',
      'Universities will rarely ask you to verify your password via an unsolicited email.'
    ],
  },
  
  "malware": {
    title:  'Malware — Protect Your Devices',
    desc:   'Malware (malicious software) includes viruses, ransomware, and spyware designed to damage your device, steal your data, or hold your files hostage until you pay a fee.',
    stats: [
      { label: 'New strains daily', val: '300k+' },
      { label: 'Best defense',      val: 'Updates' },
      { label: 'Scan frequency',    val: 'Weekly' },
    ],
    points: [
      'Never download attachments from unknown or untrusted senders.',
      'Stick to official app stores (Apple App Store, Google Play) for downloading apps.',
      'Keep your operating system and browsers updated to patch security holes.',
      'Use built-in security tools like Windows Defender or reputable third-party antivirus software.',
      'Be cautious with free software downloads, which can sometimes bundle hidden malware.',
      'Back up your important files to the cloud regularly.'
    ],
  },

  "password-security": {
    title:  'Password Security — Your First Line of Defense',
    desc:   'Passwords are the keys to your digital life. Weak or reused passwords make it incredibly easy for hackers to access your email, social media, and school accounts.',
    stats: [
      { label: 'Top hack cause',  val: 'Reused PWs' },
      { label: 'Min length',      val: '12 chars' },
      { label: 'Use a Manager',   val: 'Yes' },
    ],
    points: [
      'Use a unique password for every single account to prevent a domino effect if one gets breached.',
      'Make passwords long (12+ characters) — length is more important than complexity.',
      'Consider using a "passphrase" made of 4 random words (e.g., correct-horse-battery-staple).',
      'Use a free password manager (like Bitwarden) to generate and remember all your complex passwords.',
      'Never share your passwords with friends or write them down on sticky notes near your computer.',
      'Turn on Two-Factor Authentication (2FA) wherever possible for an extra layer of security.'
    ],
  },

  "public-wifi": {
    title:  'Public Wi-Fi — Browse with Caution',
    desc:   'Free Wi-Fi at coffee shops, airports, and even on campus can be convenient, but it is often unsecured. This means hackers on the same network can easily intercept the data you send and receive.',
    stats: [
      { label: 'Risk level', val: 'High' },
      { label: 'Look for',   val: 'HTTPS' },
      { label: 'Best tool',  val: 'VPN' },
    ],
    points: [
      'Avoid logging into sensitive accounts (like banking) while on unsecured public networks.',
      'Always look for the padlock icon and "https" in the URL bar to ensure your connection to a site is encrypted.',
      'Consider using a Virtual Private Network (VPN) to encrypt your traffic on public Wi-Fi.',
      'Turn off file sharing and AirDrop when connected to a public network.',
      'Forget public networks after you finish using them so your device does not auto-connect later.',
      'If you must access something highly sensitive, use your phone\'s cellular hotspot instead.'
    ],
  }
};
 alert("このゲームはまだ制作中であり、追加されていない役職が複数個ありますが、今後改善していくため、どうかお許しください。また、まれにエラー、もしくは絵文字が役職の隣になく、名前が赤色のものが表示される場合がございますので、おそらくランダムな役職が渡され、主にスタントマンという一度だけ襲撃から身を守れる盾を出すことができる村人陣営の役職が多く出ますので、ご対応願います。")
 alert("この人狼ゲームでは、通常時必要なゲームマスター役をこのゲームシステムで行い、ゲームマスターなしで行うことができます。そして、全員がかぶらない（現段階10人以上になるとかぶってしまいます）役職を持つことができます。今後追加していく予定のため、温かい目で見ていてください。そして、現在役職が少ないため、10人ほどで村人,人狼,第三陣営混合で行うことを推奨しています。乗っ取り役職の強さなどは役職一覧というボタンを押すと左側に出るため、そこから確認してください")
 // ゲーム設定
const GAME_CONFIG = {
    roleDistribution: {
        4: { werewolf: 1, village: 3 },
        5: { werewolf: 1, village: 4 },
        6: { werewolf: 2, village: 4 },
        7: { werewolf: 2, village: 5 },
        8: { werewolf: 3, village: 5 },
        9: { werewolf: 3, village: 6 },
        10: { werewolf: 3, village: 7 },
        11: { werewolf: 4, village: 7 },
        12: { werewolf: 4, village: 8 },
        13: { werewolf: 4, village: 9 },
        14: { werewolf: 5, village: 9 },
        15: { werewolf: 5, village: 10 },
        16: { werewolf: 5, village: 11 },
        17: { werewolf: 6, village: 11 },
        18: { werewolf: 6, village: 12 }
    },
    roleDescriptions: {
        diviner: {
            name: '🔮占い師',
            faction: '村人陣営',
            description: '夜の間に指定した人が黒（人狼）か白（村人）かわかります。夜が来る限り何度でも占えます。第三陣営は役職によって黒か白か異なります',
            color: '#00ffff'
        },
        knight: {
            name: '⚔騎士',
            faction: '村人陣営',
            description: '夜に指定した人を守ることができます。守った人が襲撃されても死亡しません。ただし2日連続では守けません。',
            color: '#ffff00'
        },
        madman: {
            name: '🐶狂人',
            faction: '人狼陣営',
            description: '人狼とは違い襲撃力はなく、誰が人狼かわかりません。人狼陣営の勝利で自分も勝利となるため、特攻してでも人狼を守ります。',
            color: '#ff8800'
        },
        hangman: {
            name: '🎣吊人',
            faction: '第三陣営',
            description: '自身が処刑されることによって勝利となります。襲撃などの処刑以外の攻撃では勝利条件を満たさず、死亡するだけです。',
            color: '#ff00ff'
        },
        werewolf: {
            name: '🐺人狼',
            faction: '人狼陣営',
            description: '毎夜1人を襲撃することができます。仲間の人狼を知ることができます。',
            color: '#ff4444'
        },
        mediumship: {
            name: '☤霊媒師',
            faction: '村人陣営',
            description: '処刑で死亡した人が夜に白（村人陣営、第三陣営）か黒（人狼陣営）かわかります。襲撃による死亡はわかりません。処刑者なしの場合は村人と同じ。',
            color: '#00ff99'
        },
        baker: {
            name: '🍞パン屋',
            faction: '村人陣営',
            description: '毎朝生存している限り「おいしいパンが焼けていました」と表示されます。死亡すると表示されません。夜は体を休めます。',
            color: '#ffcc00'
        },
            vip: {
                name: '👑VIP',
                faction: '村人陣営',
                description: 'あなたが死亡したときに「〇〇さんはVIPでした」という注記が表示されます。夜の行動はありません。',
                color: '#cccc00'
            },
        tricksterWerewolf: {
            name: '🐺大狼',
            faction: '人狼陣営',
            description: '人狼と同じですが、占い師に占われると白と出てきます。霊媒師からも白と出てきます。',
            color: '#ff6666'
        },
        soulWerewolf: {
            name: '💖魂狼',
            faction: '人狼陣営',
            description: '人狼と同じですが、一度だけ「魂撃」という特殊攻撃ができます。魂撃は騎士のガード等を全て無視して攻撃できます。使った翌日は昼に死亡します。',
            color: '#ff3388'
        },
        fox: {
            name: '🦊妖狐',
            faction: '第三陣営',
            description: '人狼の襲撃で死亡しません。勝利条件は生き延びることです。占われると呪殺されて次の日に死亡します。',
            color: '#ff9933'
        },
        sheriff: {
            name: '⚔シェリフ',
            faction: '村人陣営',
            description: '夜の行動で指定した1人を殺すことができます（殺さない選択肢もあります）。第三陣営・人狼陣営に攻撃した場合はその人が死亡しますが、村人陣営に攻撃した場合はその人は死亡せず、自分が死ぬ。',
            color: '#ff6633'
        },
        star: {
            name: '⭐スター',
            faction: '村人陣営',
            description: '夜に村人と同じように体を休めます。処刑する選択画面で己の名前が黄色になっています。',
            color: '#ffff00'
        },
        santa: {
            name: '🎅サンタ',
            faction: '村人陣営',
            description: '夜にクリスマスプレゼントを配ります。村人陣営に配った場合ランダムな役職に変身します（占い師、騎士、霊媒師、パン屋、スタントマン、シェリフ、スター、サンタ 各12.5%）。人狼陣営に配ったらサンタ自身が自爆します。',
            color: '#ff0000'
        },
        mimick: {
            name: '🔄ミミック👫',
            faction: '第三陣営',
            description: '最初はランダムに狂人か村人になります。日が変わるたびに狂人と村人が交替します。占い結果は常に白、霊媒結果も白。狂人の勝利条件を満たすと狂人として勝利、村人の勝利条件を満たすと村人として勝利します。',
            color: '#ff00ff'
        },
        planner: {
            name: '🏢計画者',
            faction: '計画者陣営',
            description: '占い結果は白。キル能力はありませんが、一人だけをレクリットに変更できます。計画者陣営として、レクリットと共に生き残る必要があります。自分が死ぬとレクリットは2日後に死亡します。',
            color: '#8B7355'
        },
        recruit: {
            name: '👦=🐕レクリット',
            faction: '計画者陣営',
            description: '夜に1人を倒すキル能力を持ちます。占い結果は黒、霊媒結果も黒。計画者と共に生き残る必要があります。自分が死ぬと計画者陣営は勝利条件を満たせません。',
            color: '#8B6914'
        },
        survivor: {
            name: '🤝サバイバー',
            faction: '第三陣営',
            description: '占い結果は白、霊媒結果も白。キル能力はなく、乗っ取り役職でもありません。勝利条件は生き延びること。どの陣営が勝利しても、自分が生き残れば共存勝利となります。',
            color: '#FFD700'
        },
        necromancer: {
            name: '💀ネクロマンサー',
            faction: '第三陣営',
            description: '夜に死亡した人を一度だけ復活させることができ、復活した人は霊人という役職に変わります。ネクロマンサーは霊人を作ると、その人の元々の役職を知ることができ、その能力を一度だけ使用できます。占い結果は黒、霊媒結果も黒。妖狐の乗っ取りに負けます。',
            color: '#663399'
        },
        cupid: {
            name: '💘キューピット',
            faction: '第三陣営',
            description: '夜に指定した二人を一度だけ恋人にできます。恋人は役職ではなく、元役職に付随する状態です。恋人の片方が死ぬと、もう片方も死亡します。キューピット自身が死んでも、恋人が生きていれば勝利となります。',
            color: '#FF1493'
        },
        nekomata: {
            name: '🐱猫又',
            faction: '村人陣営',
            description: '処刑によって吊られると、誰かをランダムに道ずれ死亡にします。キルによる死亡では道ずれできません。',
            color: '#FF8C00'
        },
        revenger: {
            name: '🗡️復讐者',
            faction: '村人陣営',
            description: 'キル持ちに殺された後に、その自分を殺した人が処刑や襲撃など別の理由で死亡すると、一度だけ生き返ります。処刑による死亡では能力は発動しません。',
            color: '#DC143C'
        },
        alchemist: {
            name: '⚗️錬金術師',
            faction: '村人陣営',
            description: '夜に処刑・襲撃・自爆など、死亡した人を一度だけ生き返させることができます。その後は村人と同じ虚無の時間となります。',
            color: '#9370DB'
        },
        gameLeader: {
            name: '🎮ゲームリーダー',
            faction: '村人陣営',
            description: '夜に、その試合に存在しない役職がランダムでわかります。一度だけ。本人にしか見えません。',
            color: '#1E90FF'
        },
        shapeshifter: {
            name: '👻シェイプシフター',
            faction: '人狼陣営',
            description: '占い結果は黒、霊媒結果も黒。キル持ちが殺した人の役職が完全にわかります（次の夜に告知）。',
            color: '#20B2AA'
        },
        blackCat: {
            name: '🐈‍⬛黒猫',
            faction: '人狼陣営',
            description: '占い結果は白、霊媒結果も白。人狼陣営に属しますが、村人枠から選出されます。狂人のように村人を騙して活動します。狂人と一緒には出ません。処刑によって吊られると、誰かをランダムに道ずれにします。',
            color: '#2F4F4F'
        }
        ,
        madmanLeader: {
            name: '😈狂人者',
            faction: '人狼陣営',
            description: 'キルを持たない人狼陣営の一員です（狂人と同様）。村人陣営から一定確率で選出されます。誰が人狼陣営か（村人側に見える）を知ることができますが、人狼（キル持ち）側からは見えません。夜に特別な行動はありません。狂人・黒猫とは同時に出現しません。',
            color: '#8B0000'
        },
        abekobe: {
            name: '🔁あべこべ',
            faction: '第三陣営',
            description: '夜に指定した人を反転させます：対象が村人なら人狼陣営にランダムな人狼役職を与え、対象が人狼なら村人陣営にランダムな村人役職を与えます。占い・霊媒は白になります。勝利条件は人狼陣営の勝利です（乗っ取り強さ：5位）。',
            color: '#FF69B4'
        }
    }
    ,
    // このゲーム実装で採用・実装された役職キーの一覧（役職一覧表示用）
    implementedRoles: [
        'diviner','knight','madman','hangman','werewolf','mediumship','baker','stuntman','tricksterWerewolf','soulWerewolf','fox','sheriff','santa','mimick','planner','recruit','survivor','necromancer','cupid','nekomata','revenger','alchemist','gameLeader','shapeshifter','blackCat','vip','madmanLeader','abekobe'
    ]
};
// グローバル参照用に割り当て
if (typeof window !== 'undefined') window.GAME_CONFIG = GAME_CONFIG;

// プレイヤークラス
class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.originalRole = null; // 初期役職を保持
        this.role = null;
        this.alive = true;
        this.faction = null;
        this.lastProtectedTarget = null;
        // 新しい役職用の属性
        this.stuntmanShielded = false; // スタントマンのシールド（1回のみ）
        this.soulWerewolfUsed = false; // 魂狼の魂撃使用済みフラグ
        this.soulWerewolfWillDie = false; // 魂狼の魂撃を使った場合、翌日死亡
        this.soulWerewolfTarget = null; // 魂狼の魂撃対象
        this.divinationCursed = false; // 妖狐が占われた場合のフラグ
        this.sheriffTarget = null; // シェリフの攻撃対象
        this.sheriffChosen = false; // シェリフが選択を行ったか
        this.hasDivined = false; // 上い師が今夜占ったか
        this.santaTarget = null; // サンタの贈呈対象
        this.santaGiftRole = null; // サンタから受け取った役職
        this.pendingSantaRole = null;
        this.pendingSantaActivateNight = null;
        this.santaFrom = null;
        this.deathCause = null; // 死因: 'alive', 'executed', 'attack', 'sheriff', 'cursed', 'soul-attack', 'santa-suicide'
        // サツマイト用
        this.satsmaiteMadman = null; // true=狂人, false=村人
        // パブロフ陣営用
        this.pablovDogCountdown = 0; // オーナーが死ぬと2日後に死亡
        this.isPablovDog = false; // このプレイヤーがパブロフの犬かどうか
        this.pablovOwner = null; // 犬が知るオーナーへの参照
        // 新役職用フラグ
        this.lover = null; // キューピットに指定された恋人（playerIdまたはnull）
        this.isSpirit = false; // ネクロマンサーに復活させられた霊人かどうか
        this.spiritOriginalRole = null; // 霊人の元々の役職キー
        this.revengeKillUsed = false; // 復讐者が復活を使ったかどうか
        this.alchemistUsed = false; // 錬金術師が復活を使ったかどうか
        this.learnedKillRole = null; // シェイプシフターが学んだキル役職
        this.gameLeaderSeenMissing = false; // ゲームリーダーが情報を取得したか
    }

    setRole(role) {
        this.role = role;
        // 陣営を設定
        switch(role) {
            case 'werewolf':
            case 'tricksterWerewolf':
            case 'soulWerewolf':
            case 'madman':
            case 'shapeshifter':
            case 'blackCat':
                this.faction = 'werewolf';
                break;
            case 'hangman':
            case 'fox':
            case 'mimick':
            case 'survivor':
            case 'necromancer':
            case 'cupid':
                this.faction = 'third';
                break;
            case 'planner':
            case 'recruit':
                this.faction = 'planner';
                break;
            default:
                this.faction = 'village';
        }
        // 役職変更時に役職固有のフラグを初期化
        this.stuntmanShielded = false;
        this.soulWerewolfUsed = false;
        this.soulWerewolfWillDie = false;
        this.soulWerewolfTarget = null;
        this.divinationCursed = false;
        this.sheriffTarget = null;
        this.sheriffChosen = false;
        this.hasDivined = false;  // 上い師の夜間聞数をリセット
        this.santaTarget = null;
        this.santaGiftRole = null;
        this.pendingSantaRole = null;
        this.pendingSantaActivateNight = null;
        this.santaFrom = null;
        this.deathCause = null;
        this.satsmaiteMadman = null;
        this.pablovDogCountdown = 0;
        this.isPablovDog = false;
        this.pablovOwner = null;
        this.pablovOwnerHasChosen = false; // オーナーが既に犬を決めたか
            }

    kill() {
        this.alive = false;
    }

    getStatusString() {
        return this.alive ? '生存' : '死亡';
    }

    getSpecialName() {
        const descriptions = GAME_CONFIG.roleDescriptions;
        return descriptions[this.role]?.name || this.role;
    }
}

// メインゲームクラス
class WerewolfGame {
    constructor() {
        this.players = [];
        this.gameState = 'setup'; // setup, role, day, night, end
        this.dayCount = 0;
        this.nightCount = 0;
        this.selectedVote = null;
        this.selectedTargets = [];
        this.currentRoleCheckIndex = 0;
        this.currentNightCheckIndex = 0;
        this.currentVotingCheckIndex = 0;
        this.initialConfig = null;
        this.timerSeconds = 180; // 3分 = 180秒
        this.timerInterval = null;
        this.isVoting = false;
        this.werewolfTargets = {}; // 人狼の選択を記録 {playerId: targetId}
        this.votingResults = {}; // 各プレイヤーの投票を記録 {playerId: targetId}
        this.knightProtection = {}; // 騎士の守りを記録 {playerId: targetId}
        this.divinationResults = {}; // 占い師の占い結果を記録
        this.playerNames = []; // プレイヤー名をカスタマイズする場合に使用
        this.useCustomNames = false; // カスタムプレイヤー名を使用するかどうか
        
        // 陣営構成
        this.factionConfig = {
            werewolf: 0,  // 人狼陣営（人狼のみ、狂人は含まない）
            village: 0,   // 村人陣営
            third: 0      // 第三陣営（吊人）
        };
        this.setupEventListeners();
        this.showSetupPhase();
    }

    setupEventListeners() {
        const get = id => document.getElementById(id);
        const on = (id, evt, fn) => { const el = get(id); if (el) el.addEventListener(evt, fn); };

        on('startBtn', 'click', () => this.startGame());
        on('confirmYesBtn', 'click', () => this.confirmPlayerIdentity());
        on('confirmRoleBtn', 'click', () => this.confirmRoleSeen());
        on('decreaseBtn', 'click', () => this.decreaseTimer());
        on('increaseBtn', 'click', () => this.increaseTimer());
        on('startVotingBtn', 'click', () => this.startVoting());
        on('nightConfirmBtn', 'click', () => this.confirmNightPlayer());
        on('restBtn', 'click', () => this.completeNight());
        on('restartBtn', 'click', () => location.reload());

        // プレイヤー名設定ボタン
        on('noNameBtn', 'click', () => this.selectNameMode(false));
        on('withNameBtn', 'click', () => this.selectNameMode(true));

        // ボタンを初期状態で非表示にする（存在チェック）
        const confirmYesBtn = get('confirmYesBtn'); if (confirmYesBtn) confirmYesBtn.style.display = 'none';
        const confirmRoleBtn = get('confirmRoleBtn'); if (confirmRoleBtn) confirmRoleBtn.style.display = 'none';

        // 陣営人数制限（存在チェックしてバインド）
        const playerCountSelect = get('playerCount');
        const werewolfCountSelect = get('werewolfCount');
        const villageCountSelect = get('villageCount');
        const thirdCountSelect = get('thirdCount');

        const updateFactionLimits = () => {
            if (!playerCountSelect || !werewolfCountSelect || !villageCountSelect || !thirdCountSelect) return;
            const playerCount = parseInt(playerCountSelect.value);
            const werewolfCount = parseInt(werewolfCountSelect.value);
            const villageCount = parseInt(villageCountSelect.value);
            const thirdCount = parseInt(thirdCountSelect.value);

            const maxWerewolf = Math.floor(playerCount / 2) - 1;
            const werewolfOptions = werewolfCountSelect.querySelectorAll('option');
            werewolfOptions.forEach(opt => {
                const val = parseInt(opt.value);
                opt.disabled = val > maxWerewolf;
            });
            if (werewolfCount > maxWerewolf) {
                werewolfCountSelect.value = Math.max(1, maxWerewolf);
            }

            const villageOptions = villageCountSelect.querySelectorAll('option');
            villageOptions.forEach(opt => { opt.disabled = false; });
            const thirdOptions = thirdCountSelect.querySelectorAll('option');
            thirdOptions.forEach(opt => { opt.disabled = false; });
        };

        if (playerCountSelect) playerCountSelect.addEventListener('change', updateFactionLimits);
        if (werewolfCountSelect) werewolfCountSelect.addEventListener('change', updateFactionLimits);
        if (villageCountSelect) villageCountSelect.addEventListener('change', updateFactionLimits);
        if (thirdCountSelect) thirdCountSelect.addEventListener('change', updateFactionLimits);

        if (playerCountSelect) {
            playerCountSelect.addEventListener('change', () => {
                if (this.useCustomNames) this.selectNameMode(true);
            });
        }

        updateFactionLimits();
    }

    startGame() {
        const playerCount = parseInt(document.getElementById('playerCount').value);
        const werewolfCount = parseInt(document.getElementById('werewolfCount').value);
        const villageCount = parseInt(document.getElementById('villageCount').value);
        const thirdCount = parseInt(document.getElementById('thirdCount').value);
        
        // 役職の合計がプレイヤー数と一致するかチェック
        const totalFaction = werewolfCount + villageCount + thirdCount;
        if (totalFaction !== playerCount) {
            alert(`役職の合計がプレイヤー数と一致しません！\n人狼陣営: ${werewolfCount}人\n村人陣営: ${villageCount}人\n第三陣営: ${thirdCount}人\n合計: ${totalFaction}人 (必要: ${playerCount}人)`);
            return;
        }
        
        // カスタム名を取得
        if (this.useCustomNames) {
            this.playerNames = [];
            for (let i = 0; i < playerCount; i++) {
                const nameInput = document.getElementById(`playerName${i}`);
                const name = nameInput ? nameInput.value.trim() : `プレイヤー${i + 1}`;
                this.playerNames.push(name || `プレイヤー${i + 1}`);
            }
        } else {
            this.playerNames = [];
        }
        
        // 陣営構成を設定
        this.factionConfig = {
            werewolf: werewolfCount,
            village: villageCount,
            third: thirdCount
        };
        
        this.initializePlayers(playerCount);
        this.assignRoles(playerCount);
        this.initializeSpecialRoles();
        this.initialConfig = GAME_CONFIG.roleDistribution[playerCount];
        this.showRoleDistribution();
        this.gameState = 'role';
        this.showRolePhase();
    }

    initializeSpecialRoles() {
        // サツマイトの初期状態を設定（狂人or村人をランダムに選ぶ）
        for (const player of this.players) {
            if (player.role === 'mimick') {
                player.satsmaiteMadman = Math.random() < 0.5; // true=狂人、false=村人
            }
        }
        
        // パブロフ陣営の設定（計画者と犬の相互認識）
        const pablovOwner = this.players.find(p => p.role === 'planner');
        const pablovDog = this.players.find(p => p.role === 'recruit');
        
        if (pablovOwner && pablovDog) {
            pablovDog.isPablovDog = true;
            pablovDog.pablovOwner = pablovOwner;
        }
    }

    initializePlayers(count) {
        this.players = [];
        for (let i = 0; i < count; i++) {
            const playerName = this.useCustomNames && this.playerNames[i] ? this.playerNames[i] : `プレイヤー${i + 1}`;
            this.players.push(new Player(i, playerName));
        }
    }

    assignRoles(playerCount) {
        // Fisher-Yates シャッフルで確実にランダムに割り当て
        const shuffled = [...this.players];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        // 役職プール（ランダムに割り当てる役職のリスト）
        const rolePool = [];
        
        // ===== 人狼陣営 =====
        // 基本人狼（大狼・魂狼で置き換える場合あり）
        let normalWerewolfCount = this.factionConfig.werewolf;
        const werewolfSpecialRoles = ['tricksterWerewolf', 'soulWerewolf'];
        
        // 合計人狼数の内、最後から特殊役職に置き換え（トータル数は変わらない）
        for (let i = 0; i < werewolfSpecialRoles.length && normalWerewolfCount > 1; i++) {
            rolePool.push(werewolfSpecialRoles[i]);
            normalWerewolfCount--;
        }
        
        // 残りを基本人狼で埋める
        for (let i = 0; i < normalWerewolfCount; i++) {
            rolePool.push('werewolf');
        }
        
        // ===== 第三陣営 =====
        // 各役職の個数制限を考慮
        const thirdRoles = ['mimick', 'survivor', 'hangman', 'fox'];
        const usedThirdRoles = new Set();
        
        let thirdCount = this.factionConfig.third;
        
        // パブロフ陣営（オーナーは1人割り当てる。犬はオーナーが夜に変換して作るため、開始時は割り当てない）
        if (thirdCount >= 2) {
            rolePool.push('planner');
            // オーナーのみ割り当て。犬はオーナーの行動で後から生成される。
            thirdCount -= 1;
            usedThirdRoles.add('planner');
        }
        
        // 残りの第三陣営を埋める（重複しない役職から選ぶ）
        const availableThirdRoles = thirdRoles.filter(r => !usedThirdRoles.has(r));
        const shuffledThird = [...availableThirdRoles];
        for (let i = shuffledThird.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledThird[i], shuffledThird[j]] = [shuffledThird[j], shuffledThird[i]];
        }
        
        let thirdIndex = 0;
        while (thirdCount > 0 && thirdIndex < shuffledThird.length) {
            rolePool.push(shuffledThird[thirdIndex]);
            thirdCount--;
            thirdIndex++;
        }
        
        // プール不足の場合は循環させる
        while (thirdCount > 0) {
            rolePool.push(shuffledThird[thirdCount % shuffledThird.length]);
            thirdCount--;
        }
        
        // ===== 村人陣営 =====
        // 必須役職（プレイヤーが選んだ村人数に応じて追加）
        const villageCountConfig = this.factionConfig.village;
        let villageAssignedMandatory = 0;
        if (villageCountConfig >= 1) {
            rolePool.push('diviner');
            villageAssignedMandatory++;
        }
        if (villageCountConfig >= 2) {
            rolePool.push('knight');
            villageAssignedMandatory++;
        }

        // 村人陣営の残り枠を計算
        const currentVillageCount = villageAssignedMandatory;
        const remainingVillageSpots = villageCountConfig - currentVillageCount;
        
        // 残り枠を特殊役職で埋める（村人枠からスマートに選ぶ）
        const villageAdditionalRoles = ['mediumship', 'baker', 'stuntman', 'sheriff', 'santa', 'vip'];
        const exclusiveMadmanPool = ['madman', 'blackCat', 'madmanLeader']; // 狂人/黒猫/狂人者は排他
        const usedVillageRoles = new Set();
        
        if (remainingVillageSpots > 0) {
            // 狂人/黒猫/狂人者のうち1つをランダムに選ぶ（同時出現しない）
            const madmanSelected = exclusiveMadmanPool[Math.floor(Math.random() * exclusiveMadmanPool.length)];
            const finalVillageRoles = [...villageAdditionalRoles, madmanSelected];
            
            // 各役職を1回ずつ割り当てる
            const shuffledVillage = [...finalVillageRoles];
            for (let i = shuffledVillage.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledVillage[i], shuffledVillage[j]] = [shuffledVillage[j], shuffledVillage[i]];
            }
            
            let villageIndex = 0;
            for (let i = 0; i < remainingVillageSpots; i++) {
                rolePool.push(shuffledVillage[villageIndex % shuffledVillage.length]);
                villageIndex++;
            }
        }
        
        // プールが足りない場合はサンタを追加
        while (rolePool.length < playerCount) {
            rolePool.push('santa');
        }
        
        // プールをシャッフル
        for (let i = rolePool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rolePool[i], rolePool[j]] = [rolePool[j], rolePool[i]];
        }
        
        // プレイヤーに役職を割り当て
        for (let i = 0; i < playerCount; i++) {
            shuffled[i].setRole(rolePool[i]);
            // 初期役職を記録（後の変化と比較するため）
            if (!shuffled[i].originalRole) shuffled[i].originalRole = rolePool[i];
        }
    }

    showRoleDistribution() {
        const distribution = document.getElementById('distribution');
        
        // 実際の役職配分をカウント
        const werewolfFactionCount = this.players.filter(p => 
            p.role === 'werewolf' || 
            p.role === 'tricksterWerewolf' || p.role === 'soulWerewolf' || p.role === 'madman' || p.role === 'blackCat' || p.role === 'shapeshifter'
        ).length;
        
        const villageFactionCount = this.players.filter(p => 
            p.role === 'santa' || p.role === 'diviner' || p.role === 'knight' || 
            p.role === 'mediumship' || p.role === 'baker' || p.role === 'stuntman' || 
            p.role === 'sheriff' || p.role === 'star'
        ).length;
        
        const thirdFactionCount = this.players.filter(p => 
            p.role === 'hangman' || p.role === 'fox' || p.role === 'mimick' || p.role === 'survivor'
        ).length;
        
        const pablovFactionCount = this.players.filter(p => 
            p.role === 'planner' || p.role === 'recruit'
        ).length;
        
        let content = `
            <div class="distItem">人狼陣営: ${werewolfFactionCount}名</div>
            <div class="distItem">村人陣営: ${villageFactionCount}名</div>
        `;
        
        const totalThirdCount = thirdFactionCount + pablovFactionCount;
        if (totalThirdCount > 0) {
            content += `<div class="distItem">第三陣営: ${totalThirdCount}名</div>`;
        }
        
        distribution.innerHTML = content;
    }

    showSetupPhase() {
        document.getElementById('setupPhase').style.display = 'block';
        document.getElementById('rolePhase').style.display = 'none';
        document.getElementById('dayPhase').style.display = 'none';
        document.getElementById('nightPhase').style.display = 'none';
        document.getElementById('gameEndPhase').style.display = 'none';
    }

    selectNameMode(useCustom) {
        this.useCustomNames = useCustom;
        const nameInputArea = document.getElementById('nameInputArea');
        
        if (useCustom) {
            // プレイヤー名入力を表示
            const playerCount = parseInt(document.getElementById('playerCount').value);
            const playerNameInputs = document.getElementById('playerNameInputs');
            playerNameInputs.innerHTML = '';
            
            for (let i = 0; i < playerCount; i++) {
                const div = document.createElement('div');
                div.style.marginBottom = '10px';
                
                const label = document.createElement('label');
                label.innerHTML = `プレイヤー${i + 1}: `;
                label.style.marginRight = '10px';
                label.style.fontSize = '14px';
                
                const input = document.createElement('input');
                input.type = 'text';
                input.id = `playerName${i}`;
                input.placeholder = `プレイヤー${i + 1}`;
                input.defaultValue = `プレイヤー${i + 1}`;
                input.style.padding = '5px';
                input.style.fontSize = '14px';
                input.style.borderRadius = '3px';
                input.style.border = '1px solid #ccc';
                input.style.width = '200px';
                
                div.appendChild(label);
                div.appendChild(input);
                playerNameInputs.appendChild(div);
            }
            
            nameInputArea.style.display = 'block';
        } else {
            // プレイヤー名入力を非表示
            nameInputArea.style.display = 'none';
            this.playerNames = [];
        }
    }

    showRolePhase() {
        document.getElementById('setupPhase').style.display = 'none';
        document.getElementById('rolePhase').style.display = 'block';
        document.getElementById('dayPhase').style.display = 'none';
        document.getElementById('nightPhase').style.display = 'none';
        document.getElementById('gameEndPhase').style.display = 'none';

        this.currentRoleCheckIndex = 0;
        this.displayCurrentPlayerRole();
    }

    displayCurrentPlayerRole() {
        const currentPlayer = this.players[this.currentRoleCheckIndex];
        const roleMessage = document.getElementById('roleMessage');
        const playerConfirm = document.getElementById('playerConfirm');
        const confirmYesBtn = document.getElementById('confirmYesBtn');
        const currentPlayerRole = document.getElementById('currentPlayerRole');
        const confirmRoleBtn = document.getElementById('confirmRoleBtn');
        const werewolfPartners = document.getElementById('werewolfPartners');
        const roleDescription = document.getElementById('roleDescription');

        // ステップ1：本人確認
        roleMessage.innerHTML = `<strong>役職確認フェーズ</strong><br>${this.currentRoleCheckIndex + 1}/${this.players.length}`;
        playerConfirm.innerHTML = `<strong>あなたは${currentPlayer.name}さんですか？</strong>`;
        confirmYesBtn.style.display = 'block';
        currentPlayerRole.style.display = 'none';
        confirmRoleBtn.style.display = 'none';
        werewolfPartners.style.display = 'none'; // 前のプレイヤーの情報をリセット
        roleDescription.style.display = 'none'; // 役職説明をリセット
        
        // ページをトップにスクロール
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }

    confirmPlayerIdentity() {
        // ステップ2：役職確認
        const currentPlayer = this.players[this.currentRoleCheckIndex];
        const playerConfirm = document.getElementById('playerConfirm');
        const confirmYesBtn = document.getElementById('confirmYesBtn');
        const currentPlayerRole = document.getElementById('currentPlayerRole');
        const confirmRoleBtn = document.getElementById('confirmRoleBtn');
        const werewolfPartners = document.getElementById('werewolfPartners');
        const partnersText = document.getElementById('partnersText');
        const roleDescription = document.getElementById('roleDescription');
        const roleDescriptionText = document.getElementById('roleDescriptionText');

        const currentPlayer2 = this.players[this.currentRoleCheckIndex];
        const roleInfo = GAME_CONFIG.roleDescriptions[currentPlayer2.role];
        
        // 役職表示テキスト
        let roleDisplayText = '';
        if (roleInfo) {
            roleDisplayText = roleInfo.name;
            const roleColor = roleInfo.color;
            currentPlayerRole.innerHTML = `<div style="color: ${roleColor}; font-size: 2.5em; font-weight: bold; text-align: center; padding: 20px;">${roleDisplayText}</div>`;
        } else {
            // roleInfoが見つからない場合のフォールバック
            const roleName = currentPlayer2.role;
            currentPlayerRole.innerHTML = `<div style="color: #ff0000; font-size: 2em; font-weight: bold; text-align: center; padding: 20px;">エラー: ${roleName}</div>`;
        }
        
        // 役職説明を表示
        if (roleInfo) {
            roleDescription.style.display = 'block';
            roleDescriptionText.innerHTML = `<strong>[${roleInfo.faction}] ${roleInfo.name}</strong><br>${roleInfo.description}`;
        }
        
        // 人狼陣営の場合、同じ陣営の仲間を表示
        const werewolfFactionRoles = ['werewolf', 'tricksterWerewolf', 'soulWerewolf'];
        if (werewolfFactionRoles.includes(currentPlayer2.role)) {
            // 人狼陣営：人狼、大狼、魂狼の仲間を表示
            const werewolfTeam = this.players.filter(p => werewolfFactionRoles.includes(p.role) && p.id !== currentPlayer2.id);
            if (werewolfTeam.length > 0) {
                werewolfPartners.style.display = 'block';
                partnersText.innerHTML = `仲間の人狼陣営は${werewolfTeam.map(w => w.name + 'さん').join('、')}です`;
            } else {
                werewolfPartners.style.display = 'none';
            }
        } else if (currentPlayer2.role === 'madman') {
            // 狂人：仲間の人狼を知らない
            werewolfPartners.style.display = 'block';
            partnersText.innerHTML = `あなたは人狼陣営ですが、誰が仲間の人狼かわかりません`;
        } else if (currentPlayer2.role === 'blackCat') {
            // 黒猫：人狼陣営だが仲間の人狼を知らない（狂人と同じ）
            werewolfPartners.style.display = 'block';
            partnersText.innerHTML = `あなたは人狼陣営ですが、誰が仲間の人狼かわかりません。猫又のように処刑されると道ずれできます`;
        } else if (currentPlayer2.role === 'planner' || currentPlayer2.role === 'recruit') {
            // 計画者陣営：計画者の相棒を表示
            const pablovTeam = this.players.filter(p => (p.role === 'planner' || p.role === 'recruit') && p.id !== currentPlayer2.id);
            if (pablovTeam.length > 0) {
                werewolfPartners.style.display = 'block';
                const teamMemberName = pablovTeam[0].name + 'さん';
                const relationshipText = currentPlayer2.role === 'planner' ? 'レクリット' : '計画者';
                partnersText.innerHTML = `あなたの${relationshipText}は${teamMemberName}です`;
            } else {
                werewolfPartners.style.display = 'none';
            }
        } else {
            werewolfPartners.style.display = 'none';
        }
        
        confirmYesBtn.style.display = 'none';
        currentPlayerRole.style.display = 'block';
        confirmRoleBtn.style.display = 'block';
        playerConfirm.innerHTML = `<strong>${currentPlayer2.name}さん、あなたの役職は</strong>`;
        
        // ページをトップにスクロール
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }

    confirmRoleSeen() {
        this.currentRoleCheckIndex++;
        
        if (this.currentRoleCheckIndex >= this.players.length) {
            // すべてのプレイヤーが役職を確認した
            // 初日の昼へ（初夜ではなく）
            this.startDay();
        } else {
            this.displayCurrentPlayerRole();
        }
    }

    startNight() {
        this.nightCount++;
        this.gameState = 'night';
        this.currentNightCheckIndex = 0;
        this.selectedTargets = [];
        this.werewolfTargets = {}; // 人狼のターゲット選択をリセット
        this.knightProtection = {}; // 騎士の守りをリセット
        this.divinationResults = {}; // 占い結果をリセット
        this.nightDeaths = []; // 今夜の死亡者を記録
        // 占い師の占いフラグをリセット
        for (const player of this.players) {
            player.hasDivined = false;
            player.sheriffChosen = false;
            player.sheriffTarget = null;
            player.santaTarget = null;
            player.soulWerewolfTarget = null;
            // learnedKillRole, gameLeaderSeenMissing, etc. はリセットしない（一度限り能力）
        }
        this.showNightPhase();
    }

    showNightPhase() {
        document.getElementById('setupPhase').style.display = 'none';
        document.getElementById('rolePhase').style.display = 'none';
        document.getElementById('dayPhase').style.display = 'none';
        document.getElementById('nightPhase').style.display = 'block';
        document.getElementById('gameEndPhase').style.display = 'none';

        this.displayNightPlayerCheck();
    }

    displayNightPlayerCheck() {
        // 次の生存プレイヤーを探す
        while (this.currentNightCheckIndex < this.players.length) {
            const currentPlayer = this.players[this.currentNightCheckIndex];
            if (currentPlayer.alive) {
                break;
            }
            this.currentNightCheckIndex++;
        }

        // すべてのプレイヤーが確認済み（または全員死亡）
        if (this.currentNightCheckIndex >= this.players.length) {
            this.currentNightCheckIndex = 0; // リセット
            this.completeNight();
            return;
        }

        const currentPlayer = this.players[this.currentNightCheckIndex];
        const nightPlayerCheck = document.getElementById('nightPlayerCheck');
        const nightConfirmBtn = document.getElementById('nightConfirmBtn');
        const nightActionArea = document.getElementById('nightActionArea');
        const restBtn = document.getElementById('restBtn');

        nightPlayerCheck.innerHTML = `<strong>あなたは${currentPlayer.name}さんですか？</strong>`;
        nightConfirmBtn.style.display = 'block';
        nightActionArea.style.display = 'none';
        restBtn.style.display = 'none';
    }

    confirmNightPlayer() {
        const currentPlayer = this.players[this.currentNightCheckIndex];
        const nightActionArea = document.getElementById('nightActionArea');
        const nightConfirmBtn = document.getElementById('nightConfirmBtn');
        const nightActionMessage = document.getElementById('nightActionMessage');
        const targetArea = document.getElementById('targetArea');
        const restingMessage = document.getElementById('restingMessage');
        const restBtn = document.getElementById('restBtn');
        const nightResult = document.getElementById('nightResult');

        nightConfirmBtn.style.display = 'none';
        nightActionArea.style.display = 'block';
        targetArea.innerHTML = '';
        nightResult.innerHTML = '';

        // サンタの保有予約がある場合は、今夜が発動夜かチェックして役職を変更する
        let santaExtraMessage = null;
        if (currentPlayer.pendingSantaRole && currentPlayer.pendingSantaActivateNight === this.nightCount) {
            const newRole = currentPlayer.pendingSantaRole;
            currentPlayer.setRole(newRole);
            delete currentPlayer.pendingSantaRole;
            delete currentPlayer.pendingSantaActivateNight;
            santaExtraMessage = `サンタからプレゼントをもらい、役職が ${GAME_CONFIG.roleDescriptions[newRole].name}（${GAME_CONFIG.roleDescriptions[newRole].faction}）に変わりました。`; 
        }

        if (currentPlayer.role === 'werewolf') {
            // 人狼：誰を襲撃するか選択
            const werewolfFaction = this.players.filter(p => p.alive && ['werewolf', 'soulWerewolf', 'tricksterWerewolf'].includes(p.role));
            let werewolfInfo = '';
            
            if (werewolfFaction.length > 1) {
                const otherWerewolves = werewolfFaction.filter(w => w.id !== currentPlayer.id);
                werewolfInfo = `<p style="color: #ff8800; margin: 10px 0;">同じキル役：${otherWerewolves.map(w => w.name).join('、')}</p>`;
            }
            
            // 既に選択を終えた人狼メンバーの選択履歴を表示
            let targetHistoryInfo = '';
            for (const werewolfMember of werewolfFaction) {
                if (werewolfMember.id !== currentPlayer.id && this.werewolfTargets[werewolfMember.id] !== undefined) {
                    const targetPlayer = this.players[this.werewolfTargets[werewolfMember.id]];
                    targetHistoryInfo += `<p style="color: #ff6666; margin: 5px 0;"><strong>${werewolfMember.name}さん</strong>は<strong>${targetPlayer.name}さん</strong>を選びました</p>`;
                }
            }
            if (targetHistoryInfo) {
                targetHistoryInfo = `<div style="background-color: rgba(255, 100, 100, 0.2); padding: 10px; margin: 10px 0; border-left: 3px solid #ff6666;">${targetHistoryInfo}</div>`;
            }

            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 人狼の襲撃</strong>${werewolfInfo}${targetHistoryInfo}<br>生存している村人の中から1人を選んで襲撃してください。`;
            
            for (const player of this.players) {
                // 人狼陣営以外を選択肢に
                if (player.alive && !['werewolf', 'soulWerewolf', 'tricksterWerewolf'].includes(player.role)) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${player.name}<br>(襲撃)`;
                    btn.onclick = () => this.selectWerewolfTarget(player.id);
                    targetArea.appendChild(btn);
                }
            }
            restingMessage.innerHTML = '';
        } else if (currentPlayer.role === 'diviner') {
            // 占い師：誰を占うか選択（一夜一回まで）
            if (currentPlayer.hasDivined) {
                // 既にこの夜に占っている
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 占い</strong><br>既にこの夜の占いは終わっています。`;
                restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
                setTimeout(() => {
                    const restBtn = document.getElementById('restBtn');
                    restBtn.style.display = 'block';
                    restBtn.innerHTML = '体を休める';
                }, 3000);
            } else {
                // 占いが可能
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 占い</strong><br>占う対象を選んでください。`;
                
                for (const player of this.players) {
                    if (player.alive && player.id !== currentPlayer.id) {
                        const btn = document.createElement('button');
                        btn.className = 'targetBtn';
                        btn.innerHTML = `${player.name}<br>(占う)`;
                        btn.onclick = () => this.selectDivinerTarget(currentPlayer.id, player.id);
                        targetArea.appendChild(btn);
                    }
                }
                restingMessage.innerHTML = '';
            }
        } else if (currentPlayer.role === 'knight') {
            // 騎士：誰を守るか選択（前夜と同じ人は除外）
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 守護</strong><br>守る対象を選んでください。`;
            
            for (const player of this.players) {
                if (player.alive && player.id !== currentPlayer.id && player.id !== currentPlayer.lastProtectedTarget) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${player.name}<br>(守る)`;
                    btn.onclick = () => this.selectKnightTarget(currentPlayer.id, player.id);
                    targetArea.appendChild(btn);
                }
            }
            restingMessage.innerHTML = '';
        } else if (currentPlayer.role === 'sheriff') {
            // シェリフ：誰を殺すか選択（殺さないという選択肢もある）
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - シェリフの銃撃</strong><br>銃撃対象を選んでください。`;
            
            for (const player of this.players) {
                if (player.alive && player.id !== currentPlayer.id) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${player.name}<br>(銃撃)`;
                    btn.onclick = () => this.selectSheriffTarget(currentPlayer.id, player.id);
                    targetArea.appendChild(btn);
                }
            }
            
            // 銃撃しないという選択肢
            const noShotBtn = document.createElement('button');
            noShotBtn.className = 'targetBtn';
            noShotBtn.innerHTML = '銃撃しない';
            noShotBtn.onclick = () => this.selectSheriffTarget(currentPlayer.id, null);
            targetArea.appendChild(noShotBtn);
            
            restingMessage.innerHTML = '';
        } else if (currentPlayer.role === 'mediumship') {
            // 霊媒師：処刑された人が白か黒か確認（処刑者がいる場合のみ）
            if (this.lastExecutedPlayer) {
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 霊媒</strong><br>昨日処刑された${this.lastExecutedPlayer.name}さんは${this.lastExecutedPlayer.faction === '人狼陣営' ? '黒（人狼陣営）' : '白（村人陣営・第三陣営）'}です`;
                const confirmBtn = document.createElement('button');
                confirmBtn.className = 'targetBtn';
                confirmBtn.innerHTML = '了解しました';
                confirmBtn.onclick = () => this.confirmMediumshipResult();
                targetArea.appendChild(confirmBtn);
                restingMessage.innerHTML = '';
            } else {
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 睡眠中</strong><br>処刑者がいないため、体を休めています...`;
                restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
                setTimeout(() => {
                    restBtn.style.display = 'block';
                    restBtn.innerHTML = '体を休める';
                }, 3000);
            }
        
        } else if (currentPlayer.role === 'stuntman') {
            // スタントマン：盾を張るか選択
            if (!currentPlayer.stuntmanShielded) {
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - スタントマンの防御</strong><br>自分に盾を張りますか？`;
                
                const yesBtn = document.createElement('button');
                yesBtn.className = 'targetBtn';
                yesBtn.innerHTML = 'はい（盾を張る）';
                yesBtn.onclick = () => this.selectStuntmanAction(currentPlayer.id, true);
                targetArea.appendChild(yesBtn);
                
                const noBtn = document.createElement('button');
                noBtn.className = 'targetBtn';
                noBtn.innerHTML = 'いいえ（張らない）';
                noBtn.onclick = () => this.selectStuntmanAction(currentPlayer.id, false);
                targetArea.appendChild(noBtn);
                
                restingMessage.innerHTML = '';
            } else {
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 睡眠中</strong><br>盾はもう張りました。体を休めています...`;
                restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
                setTimeout(() => {
                    restBtn.style.display = 'block';
                    restBtn.innerHTML = '体を休める';
                }, 3000);
            }
        } else if (currentPlayer.role === 'baker') {
            // パン屋：何もしない（朝にメッセージが出るだけ）
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - パン屋の就寝</strong><br>おいしいパンを焼いています...`;
            restingMessage.innerHTML = '<p style="color: #ff9933; font-size: 0.9em;">〜 パンを焼いている音 〜</p>';
            
            setTimeout(() => {
                restBtn.style.display = 'block';
                restBtn.innerHTML = '体を休める';
            }, 3000);
        } else if (currentPlayer.role === 'santa') {
            // サンタ：プレゼントを配る対象を選択
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - サンタのプレゼント</strong><br>プレゼントを配る対象を選んでください。`;
            
            for (const player of this.players) {
                if (player.alive && player.id !== currentPlayer.id) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${player.name}<br>(プレゼント)`;
                    btn.onclick = () => this.selectSantaTarget(currentPlayer.id, player.id);
                    targetArea.appendChild(btn);
                }
            }
            
            restingMessage.innerHTML = '';
        } else if (currentPlayer.role === 'soulWerewolf') {
            // 魂狼：通常の人狼と同じ、ただし魂撃が可能
            const werewolfFaction = this.players.filter(p => p.alive && ['werewolf', 'soulWerewolf', 'tricksterWerewolf'].includes(p.role));
            let werewolfInfo = '';
            
            if (werewolfFaction.length > 1) {
                const otherWerewolves = werewolfFaction.filter(w => w.id !== currentPlayer.id);
                werewolfInfo = `<p style="color: #ff8800; margin: 10px 0;">同じキル役：${otherWerewolves.map(w => w.name).join('、')}</p>`;
            }
            
            // 既に選択を終えた人狼メンバーの選択履歴を表示
            let targetHistoryInfo = '';
            for (const werewolfMember of werewolfFaction) {
                if (werewolfMember.id !== currentPlayer.id && this.werewolfTargets[werewolfMember.id] !== undefined) {
                    const targetPlayer = this.players[this.werewolfTargets[werewolfMember.id]];
                    targetHistoryInfo += `<p style="color: #ff6666; margin: 5px 0;"><strong>${werewolfMember.name}さん</strong>は<strong>${targetPlayer.name}さん</strong>を選びました</p>`;
                }
            }
            if (targetHistoryInfo) {
                targetHistoryInfo = `<div style="background-color: rgba(255, 100, 100, 0.2); padding: 10px; margin: 10px 0; border-left: 3px solid #ff6666;">${targetHistoryInfo}</div>`;
            }

            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 魂狼の襲撃</strong>${werewolfInfo}${targetHistoryInfo}<br>生存している村人の中から1人を選んで襲撃してください。`;
            
            for (const player of this.players) {
                if (player.alive && !['werewolf', 'soulWerewolf', 'tricksterWerewolf'].includes(player.role)) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${player.name}<br>(襲撃)`;
                    btn.onclick = () => this.selectWerewolfTarget(player.id);
                    targetArea.appendChild(btn);
                }
            }
            
            // 魂撃の選択肢（まだ使用していない場合）
            if (!currentPlayer.soulWerewolfUsed) {
                const soulAttackBtn = document.createElement('button');
                soulAttackBtn.className = 'targetBtn';
                soulAttackBtn.style.backgroundColor = '#ff3388';
                soulAttackBtn.innerHTML = '<strong>魂撃を使用する</strong>';
                soulAttackBtn.onclick = () => {
                    // 魂撃の対象選択
                    nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 魂狼の魂撃</strong><br>魂撃対象を選んでください。`;
                    targetArea.innerHTML = '';
                    for (const player of this.players) {
                        if (player.alive && !['werewolf', 'soulWerewolf', 'tricksterWerewolf'].includes(player.role)) {
                            const btn = document.createElement('button');
                            btn.className = 'targetBtn';
                            btn.innerHTML = `${player.name}<br>(魂撃)`;
                            btn.onclick = () => this.selectSoulAttackTarget(currentPlayer.id, player.id);
                            targetArea.appendChild(btn);
                        }
                    }
                };
                targetArea.appendChild(soulAttackBtn);
            }
            
            restingMessage.innerHTML = '';
        } else if (currentPlayer.role === 'tricksterWerewolf') {
            // 大狼：通常の人狼と同じ
            const werewolfFaction = this.players.filter(p => p.alive && ['werewolf', 'soulWerewolf', 'tricksterWerewolf'].includes(p.role));
            let werewolfInfo = '';
            
            if (werewolfFaction.length > 1) {
                const otherWerewolves = werewolfFaction.filter(w => w.id !== currentPlayer.id);
                werewolfInfo = `<p style="color: #ff8800; margin: 10px 0;">同じキル役：${otherWerewolves.map(w => w.name).join('、')}</p>`;
            }
            
            // 既に選択を終えた人狼メンバーの選択履歴を表示
            let targetHistoryInfo = '';
            for (const werewolfMember of werewolfFaction) {
                if (werewolfMember.id !== currentPlayer.id && this.werewolfTargets[werewolfMember.id] !== undefined) {
                    const targetPlayer = this.players[this.werewolfTargets[werewolfMember.id]];
                    targetHistoryInfo += `<p style="color: #ff6666; margin: 5px 0;"><strong>${werewolfMember.name}さん</strong>は<strong>${targetPlayer.name}さん</strong>を選びました</p>`;
                }
            }
            if (targetHistoryInfo) {
                targetHistoryInfo = `<div style="background-color: rgba(255, 100, 100, 0.2); padding: 10px; margin: 10px 0; border-left: 3px solid #ff6666;">${targetHistoryInfo}</div>`;
            }

            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 大狼の襲撃</strong>${werewolfInfo}${targetHistoryInfo}<br>生存している村人の中から1人を選んで襲撃してください。`;
            
            for (const player of this.players) {
                // 妖狐は襲撃できない（人狼と同様の制約）
                if (player.alive && !['werewolf', 'soulWerewolf', 'tricksterWerewolf', 'fox'].includes(player.role)) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${player.name}<br>(襲撃)`;
                    btn.onclick = () => this.selectWerewolfTarget(player.id);
                    targetArea.appendChild(btn);
                }
            }
            
            restingMessage.innerHTML = '';
        } else if (currentPlayer.role === 'mimick') {
            // ミミック：今日の状態を表示、何もしない
            const isMadmanToday = currentPlayer.satsmaiteMadman;
            const statusText = isMadmanToday ? '狂人' : '村人';
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - ミミック</strong><br>今日はあなたは<span style="font-weight: bold; color: #ff00ff;">${statusText}</span>です。<br>体を休めています...`;
            restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
            
            setTimeout(() => {
                restBtn.style.display = 'block';
                restBtn.innerHTML = '体を休める';
            }, 3000);
        } else if (currentPlayer.role === 'recruit') {
            // レクリット：計画者と同様のキル能力
            const pablovFaction = this.players.filter(p => p.alive && p.role === 'planner');
            let pablovInfo = '';
            if (pablovFaction.length > 0) {
                pablovInfo = `<p style="color: #8B6914; margin: 10px 0;">主人：${pablovFaction[0].name}</p>`;
            }
            
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - レクリットの狩り</strong>${pablovInfo}<br>生存している村人の中から1人を選んで襲撃してください。`;
            
            for (const player of this.players) {
                // 妖狐は襲撃できない（人狼と同様の制約）
                if (player.alive && player.id !== currentPlayer.id && !(['werewolf', 'soulWerewolf', 'tricksterWerewolf', 'fox'].includes(player.role))) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${player.name}<br>(襲撃)`;
                    btn.onclick = () => this.selectPablovDogTarget(currentPlayer.id, player.id);
                    targetArea.appendChild(btn);
                }
            }
            restingMessage.innerHTML = '';
        } else if (currentPlayer.role === 'planner') {
            // 計画者：初夜に犬決定必須、以降は変更不可
            const pablovDog = this.players.find(p => p.role === 'recruit');
            let dogInfo = '';
            if (pablovDog && pablovDog.alive) {
                dogInfo = `<p style="color: #8B6914; margin: 10px 0;">現在の犬：${pablovDog.name}</p>`;
            }

            // 初夜（nightCount === 1）に犬決め必須、以降は休む
            if (this.nightCount === 1) {
                // 初夜：犬を必ず決めなければならない
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 計画者</strong>${dogInfo}<br><span style="color:#ff6600; font-weight:bold;">※初夜に犬を決める必要があります（選択を中止できません）</span><br>犬にする対象を選んでください。`;
                
                for (const player of this.players) {
                    if (player.alive && player.id !== currentPlayer.id) {
                        const btn = document.createElement('button');
                        btn.className = 'targetBtn';
                        btn.innerHTML = `${player.name}<br>(犬にする)`;
                        btn.onclick = () => this.selectPablovOwnerTarget(currentPlayer.id, player.id);
                        targetArea.appendChild(btn);
                    }
                }
                restingMessage.innerHTML = '';
            } else if (currentPlayer.pablovOwnerHasChosen) {
                // 2日目以降：既に犬を決めているので行動不可（休む）
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 計画者</strong><br>あなたは既に犬を決めています。今夜は体を休めます。`;
                restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
                setTimeout(() => {
                    restBtn.style.display = 'block';
                    restBtn.innerHTML = '体を休める';
                }, 1000);
            }
        } else if (currentPlayer.role === 'survivor') {
            // サバイバー：何もしない
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 睡眠中</strong><br>機会を待ちながら体を休めています...`;
            restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
            
            setTimeout(() => {
                restBtn.style.display = 'block';
                restBtn.innerHTML = '体を休める';
            }, 3000);
        } else if (currentPlayer.role === 'cupid') {
            // キューピット：恋人ペアを選択（2回まで）
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - キューピットの祝福</strong><br>恋人にする2人を選んでください。`;
            
            const selectBtn = document.createElement('button');
            selectBtn.className = 'targetBtn';
            selectBtn.innerHTML = '対象を選択開始';
            selectBtn.style.backgroundColor = '#FF1493';
            selectBtn.onclick = () => {
                const cupidSelections = [];
                nightActionArea.innerHTML = '<div style="color:#FF1493; font-weight:bold; margin:10px 0;">恋人にする2人を選んでください</div>';
                targetArea.innerHTML = '';
                
                for (const player of this.players) {
                    if (player.alive && player.id !== currentPlayer.id) {
                        const btn = document.createElement('button');
                        btn.className = 'targetBtn';
                        btn.innerHTML = `${player.name}`;
                        btn.onclick = () => {
                            if (cupidSelections.includes(player.id)) {
                                cupidSelections.splice(cupidSelections.indexOf(player.id), 1);
                                btn.style.backgroundColor = '';
                            } else if (cupidSelections.length < 2) {
                                cupidSelections.push(player.id);
                                btn.style.backgroundColor = '#FFB6C1';
                            }
                            
                            if (cupidSelections.length === 2) {
                                const confirmBtn = document.createElement('button');
                                confirmBtn.className = 'targetBtn';
                                confirmBtn.innerHTML = '決定';
                                confirmBtn.style.backgroundColor = '#FF1493';
                                confirmBtn.onclick = () => this.selectCupidTargets(currentPlayer.id, cupidSelections);
                                targetArea.appendChild(confirmBtn);
                            }
                        };
                        targetArea.appendChild(btn);
                    }
                }
            };
            targetArea.appendChild(selectBtn);
            restingMessage.innerHTML = '';
        } else if (currentPlayer.role === 'necromancer') {
            // ネクロマンサー：夜に死んだ人を復活させる
            const deadPlayers = this.players.filter(p => !p.alive && p.deathCause);
            
            if (deadPlayers.length > 0) {
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - ネクロマンサーの復活</strong><br>復活させる死亡者を選んでください。`;
                
                for (const deadPlayer of deadPlayers) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${deadPlayer.name}<br>(${GAME_CONFIG.roleDescriptions[deadPlayer.originalRole]?.name || deadPlayer.originalRole})`;
                    btn.onclick = () => this.selectNecromancerTarget(currentPlayer.id, deadPlayer.id);
                    targetArea.appendChild(btn);
                }
            } else {
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - ネクロマンサー</strong><br>復活させる死体がありません。体を休めています...`;
                restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
                setTimeout(() => {
                    restBtn.style.display = 'block';
                    restBtn.innerHTML = '体を休める';
                }, 3000);
            }
        } else if (currentPlayer.role === 'alchemist') {
            // 錬金術師：死亡者を復活させる（1回まで）
            if (!currentPlayer.alchemistUsed) {
                const deadPlayers = this.players.filter(p => !p.alive && p.deathCause);
                
                if (deadPlayers.length > 0) {
                    nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 錬金術師の錬成</strong><br>復活させる死亡者を選んでください。`;
                    
                    for (const deadPlayer of deadPlayers) {
                        const btn = document.createElement('button');
                        btn.className = 'targetBtn';
                        btn.innerHTML = `${deadPlayer.name}`;
                        btn.onclick = () => this.selectAlchemistTarget(currentPlayer.id, deadPlayer.id);
                        targetArea.appendChild(btn);
                    }
                } else {
                    nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 錬金術師</strong><br>復活させる死体がありません。体を休めています...`;
                    restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
                    setTimeout(() => {
                        restBtn.style.display = 'block';
                        restBtn.innerHTML = '体を休める';
                    }, 3000);
                }
            } else {
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 錬金術師</strong><br>既に復活させました。虚無の時間になります...`;
                restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
                setTimeout(() => {
                    restBtn.style.display = 'block';
                    restBtn.innerHTML = '体を休める';
                }, 3000);
            }
        } else if (currentPlayer.role === 'gameLeader') {
            // ゲームリーダー：存在しない役職を見る（1回まで）
            if (!currentPlayer.gameLeaderSeenMissing) {
                // 全役職の中からゲームに存在しない役職を選ぶ
                const allRoles = Object.keys(GAME_CONFIG.roleDescriptions);
                const playersRoles = new Set(this.players.map(p => p.role));
                const missingRoles = allRoles.filter(role => !playersRoles.has(role));
                
                if (missingRoles.length > 0) {
                    const selectedMissing = missingRoles[Math.floor(Math.random() * missingRoles.length)];
                    const missingRoleName = GAME_CONFIG.roleDescriptions[selectedMissing].name;
                    
                    nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - ゲームリーダーの知識</strong><br><span style="color:#1E90FF; font-weight:bold;">このゲームに存在しない役職は「${missingRoleName}」です。</span>`;
                    currentPlayer.gameLeaderSeenMissing = true;
                    
                    const confirmBtn = document.createElement('button');
                    confirmBtn.className = 'targetBtn';
                    confirmBtn.innerHTML = '了解しました';
                    confirmBtn.onclick = () => this.confirmGameLeaderResult();
                    targetArea.appendChild(confirmBtn);
                } else {
                    nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - ゲームリーダー</strong><br>すべての役職がゲームに存在します。`;
                    setTimeout(() => {
                        restBtn.style.display = 'block';
                        restBtn.innerHTML = '了解';
                    }, 3000);
                }
            } else {
                nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - ゲームリーダー</strong><br>既に情報を取得しました。体を休めています...`;
                restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
                setTimeout(() => {
                    restBtn.style.display = 'block';
                    restBtn.innerHTML = '体を休める';
                }, 3000);
            }
        } else if (currentPlayer.role === 'nekomata' || currentPlayer.role === 'revenger' 
                   || currentPlayer.role === 'shapeshifter' || currentPlayer.role === 'blackCat') {
            // 猫又、復讐者、シェイプシフター、黒猫：虚無の時間（特殊な夜間能力なし）
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 睡眠中</strong><br>体を休めています...`;
            restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
            
            setTimeout(() => {
                restBtn.style.display = 'block';
                restBtn.innerHTML = '体を休める';
            }, 3000);
        } else if (currentPlayer.role === 'abekobe') {
            // あべこべ：対象を反転させる
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - あべこべの反転</strong><br>反転させる対象を選んでください。`;
            for (const player of this.players) {
                if (player.alive && player.id !== currentPlayer.id) {
                    const btn = document.createElement('button');
                    btn.className = 'targetBtn';
                    btn.innerHTML = `${player.name}`;
                    btn.onclick = () => this.selectAbekobeTarget(currentPlayer.id, player.id);
                    targetArea.appendChild(btn);
                }
            }
            restingMessage.innerHTML = '';
        } else {
            // 村人、狂人、吊人、スター、妖狐：虚無の時間
            nightActionMessage.innerHTML = `<strong>夜 ${this.nightCount}日目 - 睡眠中</strong><br>体を休めています...`;
            restingMessage.innerHTML = '<p style="color: #999; font-size: 0.9em;">〜 虚無の時間 〜</p>';
            
            setTimeout(() => {
                restBtn.style.display = 'block';
                restBtn.innerHTML = '体を休める';
            }, 3000);
        }
        // 表示ヘッダー：自分の名前の隣に役職名と陣営を表示
        const roleInfoHeader = GAME_CONFIG.roleDescriptions[currentPlayer.role] || { name: currentPlayer.role, faction: currentPlayer.faction, color: '#ffffff' };
        const headerHtml = `<div style="margin-bottom:8px;">${currentPlayer.name} — <span style="color:${roleInfoHeader.color}; font-weight:bold;">${roleInfoHeader.name}</span>（${roleInfoHeader.faction}）</div>`;
        nightActionMessage.innerHTML = headerHtml + nightActionMessage.innerHTML;

        // サンタによる役職変化メッセージがある場合は表示（役職表示は既に反映済み）
        if (santaExtraMessage) {
            const santaHtml = `<div style="color:#ff66bb; font-weight:bold; margin-bottom:8px;">${santaExtraMessage}</div>`;
            nightActionMessage.innerHTML = santaHtml + nightActionMessage.innerHTML;
        }
    }

    selectWerewolfTarget(playerId) {
        const currentPlayer = this.players[this.currentNightCheckIndex];
        const targetPlayer = this.players[playerId];
        
        // この人狼のターゲット選択を記録
        this.werewolfTargets[currentPlayer.id] = playerId;
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        restBtn.innerHTML = `${targetPlayer.name}を襲撃する`;
    }

    selectPablovDogTarget(dogId, targetId) {
        const currentPlayer = this.players[this.currentNightCheckIndex];
        const targetPlayer = this.players[targetId];
        
        // パブロフの犬のターゲット選択を記録（人狼と同じwerewolfTargetsに記録）
        this.werewolfTargets[currentPlayer.id] = targetId;
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        restBtn.innerHTML = `${targetPlayer.name}を襲撃する`;
    }

    selectPablovOwnerTarget(ownerId, targetId) {
        const currentPlayer = this.players[this.currentNightCheckIndex];
        const restBtn = document.getElementById('restBtn');
        
        // 初夜で犬決め（targetId が null でない場合はフラグを立てる）
        if (this.nightCount === 1 && targetId !== null) {
            currentPlayer.pablovOwnerHasChosen = true;
        }
        
        if (targetId === null) {
            // 変更しない選択（初夜は選択不可なので、この分岐は初夜では呼ばれない）
            restBtn.style.display = 'block';
            restBtn.innerHTML = '変更しない';
        } else {
            const targetPlayer = this.players[targetId];
            const werewolfFactionRoles = ['werewolf', 'soulWerewolf', 'tricksterWerewolf', 'madman'];
            
            if (werewolfFactionRoles.includes(targetPlayer.role)) {
                    // 人狼陣営を選んだ場合はオーナーが死亡（表示上は自爆表記しない）
                    currentPlayer.deathCause = 'self-elimination';
                    currentPlayer.kill();
                    this.nightDeaths.push(currentPlayer);
                    
                    restBtn.style.display = 'block';
                    restBtn.innerHTML = '行動の結果、死亡しました';
            } else {
                // 通常の犬への変換
                // 古い犬を見つけて役職をリセット
                const oldDog = this.players.find(p => p.role === 'recruit');
                if (oldDog) {
                    oldDog.setRole('hangman'); // 吊人に戻す
                }
                
                // 新しいレクリットに変換
                targetPlayer.setRole('recruit');
                targetPlayer.isPablovDog = true;
                targetPlayer.pablovOwner = currentPlayer;
                
                restBtn.style.display = 'block';
                restBtn.innerHTML = `${targetPlayer.name}を犬に変更する`;
            }
        }
    }

    selectDivinerTarget(divinerId, targetId) {
        const targetPlayer = this.players[targetId];
        const targetRole = this.players[targetId].role;
        const diviner = this.players[divinerId];
        
        // 占い師の占い結果を判定
        let result = '白（村人）';
        
        // 黒（人狼陣営）：人狼、魂狼、パブロフの犬、シェイプシフター
        if (targetRole === 'werewolf' || targetRole === 'soulWerewolf' || targetRole === 'recruit' || targetRole === 'shapeshifter') {
            result = '黒（人狼）';
        }
        // 大狼、狂人、パブロフのオーナー：白と出てくる
        // (デフォルトで白)
        
        this.divinationResults[divinerId] = { targetId, result };
        
        // 妖狐が占われた場合の処理
        if (targetRole === 'fox') {
            targetPlayer.divinationCursed = true;
        }
        
        // 占い師がこの夜に占ったことを記録
        diviner.hasDivined = true;
        
        // 選択肢ボタンを全部消す
        const targetArea = document.getElementById('targetArea');
        targetArea.innerHTML = '';
        
        // 占い結果を占い師本人にだけ表示（nightResult に表示）
        const nightResult = document.getElementById('nightResult');
        nightResult.innerHTML = `<p style="color: #00ffff; font-weight: bold;">${targetPlayer.name}を占いました<br>結果：${result}</p>`;
        
        // 「了解しました」ボタンを表示
        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'targetBtn';
        confirmBtn.innerHTML = '了解しました';
        confirmBtn.style.marginTop = '10px';
        confirmBtn.onclick = () => {
            nightResult.innerHTML = '';
            this.completeNight();
        };
        nightResult.appendChild(confirmBtn);
    }

    selectKnightTarget(knightId, targetId) {
        const targetPlayer = this.players[targetId];
        const knight = this.players[knightId];
        
        this.knightProtection[knightId] = targetId;
        knight.lastProtectedTarget = targetId;
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        restBtn.innerHTML = `${targetPlayer.name}を守る`;
    }

    selectSheriffTarget(sheriffId, targetId) {
        const sheriff = this.players[sheriffId];
        sheriff.sheriffTarget = targetId;
        sheriff.sheriffChosen = true;
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        if (targetId === null) {
            restBtn.innerHTML = '銃撃しない';
        } else {
            const targetPlayer = this.players[targetId];
            restBtn.innerHTML = `${targetPlayer.name}を銃撃する`;
        }
    }

    selectSantaTarget(santaId, targetId) {
        const santa = this.players[santaId];
        santa.santaTarget = targetId;
        
        const targetPlayer = this.players[targetId];
        const nightResult = document.getElementById('nightResult');
        nightResult.innerHTML = `<p style="color: #ff6600; font-weight: bold;">${targetPlayer.name}を選んでいます</p>`;
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        restBtn.innerHTML = `${targetPlayer.name}にプレゼントを配る`;
    }

    selectStuntmanAction(stuntmanId, shield) {
        const stuntman = this.players[stuntmanId];
        if (shield) {
            stuntman.stuntmanShielded = true;
        }
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        restBtn.innerHTML = shield ? '盾を張る' : '張らない';
    }

    confirmMediumshipResult() {
        // 青媒師が結果を確認したら、次へ進む
        this.completeNight();
    }

    selectSoulAttackTarget(soulWerewolfId, targetId) {
        const soulWerewolf = this.players[soulWerewolfId];
        soulWerewolf.soulWerewolfTarget = targetId;
        soulWerewolf.soulWerewolfUsed = true;
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        const targetPlayer = this.players[targetId];
        restBtn.innerHTML = `${targetPlayer.name}に魂撃を放つ`;
    }

    selectCupidTargets(cupidId, targetIds) {
        const cupid = this.players[cupidId];
        if (targetIds.length === 2) {
            const player1 = this.players[targetIds[0]];
            const player2 = this.players[targetIds[1]];
            
            // 恋人ペアを作成
            player1.lover = targetIds[1];
            player2.lover = targetIds[0];
            
            const restBtn = document.getElementById('restBtn');
            restBtn.style.display = 'block';
            restBtn.innerHTML = `${player1.name}と${player2.name}を恋人にする`;
        }
    }

    selectNecromancerTarget(necromancerId, deadPlayerId) {
        const necromancer = this.players[necromancerId];
        const deadPlayer = this.players[deadPlayerId];
        const originalRole = deadPlayer.originalRole;
        
        // 死亡した人を霊人に変更して復活
        deadPlayer.alive = true;
        deadPlayer.isSpirit = true;
        deadPlayer.spiritOriginalRole = originalRole;
        deadPlayer.role = 'hangman'; // 霊人の初期役職を吊人に設定（これは表示用）
        deadPlayer.deathCause = null;
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        restBtn.innerHTML = `${deadPlayer.name}を霊人として復活させる`;
    }

    selectAlchemistTarget(alchemistId, deadPlayerId) {
        const alchemist = this.players[alchemistId];
        const deadPlayer = this.players[deadPlayerId];
        
        // 死亡した人を復活
        deadPlayer.alive = true;
        deadPlayer.deathCause = null;
        alchemist.alchemistUsed = true;
        
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        restBtn.innerHTML = `${deadPlayer.name}を復活させる`;
    }

    confirmGameLeaderResult() {
        this.completeNight();
    }

    selectAbekobeTarget(abekobeId, targetId) {
        const abekobe = this.players[abekobeId];
        abekobe.abekobeTarget = targetId;
        const targetPlayer = this.players[targetId];
        const restBtn = document.getElementById('restBtn');
        restBtn.style.display = 'block';
        restBtn.innerHTML = `${targetPlayer.name}を反転する`;
    }

    completeNight() {
        this.currentNightCheckIndex++;
        
        if (this.currentNightCheckIndex >= this.players.length) {
            // すべてのプレイヤーが夜フェーズを完了
            // 効果の適用順序：サンタ → シェリフ → 魂撃 → 人狼 → 騎士
            this.applySantaEffect();
            this.applySheriffEffect();
            this.applySoulAttackEffect(); // 魂撃を処理（騎士ガードを無視）
            this.determineWerewolfTarget();
            this.applyKnightProtection();
            this.startDay();
        } else {
            const nightResult = document.getElementById('nightResult');
            nightResult.innerHTML = '';
            this.displayNightPlayerCheck();
        }
    }

    determineWerewolfTarget() {
        if (Object.keys(this.werewolfTargets).length === 0) {
            // 人狼が誰も選んでいない場合
            this.selectedTargets = [];
            return;
        }

        // 各キル持ちの選択を個別に記録（複数の襲撃に対応）
        this.selectedTargets = [];
        const processedTargets = new Set();
        
        for (const [werewolfId, targetId] of Object.entries(this.werewolfTargets)) {
            if (targetId !== null && targetId !== undefined && !processedTargets.has(targetId)) {
                const targetPlayer = this.players[targetId];
                if (targetPlayer && targetPlayer.alive) {
                    this.selectedTargets.push(targetPlayer);
                    processedTargets.add(targetId);
                }
            }
        }
    }

    applySantaEffect() {
        // サンタの贈呈効果を適用
        const villageRoles = ['diviner','knight','mediumship','baker','stuntman','sheriff','star','santa'];
        for (const santa of this.players) {
            if (santa.alive && santa.role === 'santa' && santa.santaTarget !== null) {
                const target = this.players[santa.santaTarget];
                if (!target || !target.alive) {
                    santa.santaTarget = null;
                    continue;
                }

                // 人外（村人陣営以外）に渡したらサンタは自爆
                if (target.faction !== 'village') {
                    santa.deathCause = 'santa-suicide';
                    santa.kill();
                    this.nightDeaths.push(santa);
                    santa.santaTarget = null;
                    continue;
                }

                // 村人に渡した場合は翌夜に役職が変わるように予約する
                // 受け取り側の現在役職と同じ役職にならないようにする
                const options = villageRoles.filter(r => r !== target.role);
                const newRole = options.length > 0 ? options[Math.floor(Math.random() * options.length)] : target.role;
                target.pendingSantaRole = newRole;
                target.pendingSantaActivateNight = this.nightCount + 1;
                target.santaFrom = santa.id;
                santa.santaTarget = null;
            }
        }
    }

    applySheriffEffect() {
        // シェリフの銃撃効果を適用（明示的に選択した場合のみ処理）
        for (const sheriff of this.players) {
            if (sheriff.alive && sheriff.role === 'sheriff' && sheriff.sheriffChosen) {
                const target = (sheriff.sheriffTarget !== null) ? this.players[sheriff.sheriffTarget] : null;

                if (target && target.alive) {
                    // 村人陣営に攻撃した場合：シェリフが死ぬ
                    if (target.faction === 'village') {
                        sheriff.deathCause = 'self-elimination';
                        sheriff.kill();
                        this.nightDeaths.push(sheriff);
                    } else {
                        // 人狼陣営・第三陣営に攻撃した場合：対象が死ぬ
                        target.deathCause = 'sheriff';
                        target.kill();
                        this.nightDeaths.push(target);
                    }
                }
                // 選択フラグとターゲットをリセット
                sheriff.sheriffChosen = false;
                sheriff.sheriffTarget = null;
            }
        }
    }

    applySoulAttackEffect() {
        // 魂狼の魂撃効果を適用（騎士ガードを無視）
        for (const soulWolf of this.players) {
            if (soulWolf.alive && soulWolf.role === 'soulWerewolf' && soulWolf.soulWerewolfTarget !== null && soulWolf.soulWerewolfUsed) {
                const target = this.players[soulWolf.soulWerewolfTarget];
                if (target && target.alive) {
                    // 妖狐も魂撃では死ぬ（妖狐の攻撃無効化は通常の人狼襲撃のみ）
                    target.deathCause = 'soul-attack';
                    target.kill();
                    this.nightDeaths.push(target);
                    // 魂狼は次の日に死亡する予定を立てる
                    soulWolf.soulWerewolfWillDie = true;
                }
                soulWolf.soulWerewolfTarget = null;
            }
        }
    }

    applyKnightProtection() {
        // 騎士の保護を適用（守られている対象を襲撃対象から除外）
        if (this.selectedTargets && this.selectedTargets.length > 0) {
            const protectedIds = Object.values(this.knightProtection);
            this.selectedTargets = this.selectedTargets.filter(target => !protectedIds.includes(target.id));
        }
    }

    startDay() {
        this.dayCount++;
        this.gameState = 'day';
        this.selectedVote = null;
        this.isVoting = false;
        this.timerSeconds = 180; // 3分リセット
        
        // 魂狼が魂撃を使った場合、この朝に死亡する
        for (const soulWolf of this.players) {
            if (soulWolf.alive && soulWolf.soulWerewolfWillDie) {
                soulWolf.deathCause = 'soul-attack-retaliate';
                soulWolf.kill();
                this.nightDeaths.push(soulWolf);
                soulWolf.soulWerewolfWillDie = false;
            }
        }
        
        // ミミックの状態を交替（日が変わるたびに狂人と村人が交替）
        for (const player of this.players) {
            if (player.alive && player.role === 'mimick' && player.satsmaiteMadman !== null) {
                player.satsmaiteMadman = !player.satsmaiteMadman;
            }
        }
        
        // パブロフの計画者が死んでいる場合、犬のカウントダウンを進める
        const pablovOwner = this.players.find(p => p.role === 'planner');
        const pablovDog = this.players.find(p => p.role === 'recruit');
        
        if (pablovDog && pablovDog.alive && pablovOwner && !pablovOwner.alive) {
            pablovDog.pablovDogCountdown++;
            if (pablovDog.pablovDogCountdown >= 2) {
                // 2日後に死亡
                pablovDog.deathCause = 'owner-death';
                pablovDog.kill();
                this.nightDeaths.push(pablovDog);
            }
        }

        // あべこべの反転処理（夜に指定された対象を反転させる）
        // 反転の記録は昼表示で行うため配列に貯める
        this.abekobeFlips = [];
        const werewolfKillRoles = ['werewolf', 'tricksterWerewolf', 'soulWerewolf'];
        const villageRolesPool = ['diviner','knight','mediumship','baker','stuntman','sheriff','santa','vip'];
        for (const ab of this.players) {
            if (!ab.alive) continue;
            if (ab.role === 'abekobe' && ab.abekobeTarget !== null && ab.abekobeTarget !== undefined) {
                const target = this.players[ab.abekobeTarget];
                if (!target) continue;
                // 対象が村人陣営なら人狼のキル持ち役職からランダムに付与
                if (target.faction === 'village') {
                    const newRole = werewolfKillRoles[Math.floor(Math.random() * werewolfKillRoles.length)];
                    target.setRole(newRole);
                    this.abekobeFlips.push(`${target.name}さんは夜の間に${GAME_CONFIG.roleDescriptions[newRole].name}に反転しました。`);
                } else if (target.faction === 'werewolf') {
                    // 対象が人狼陣営なら村人系役職からランダム
                    const newRole = villageRolesPool[Math.floor(Math.random() * villageRolesPool.length)];
                    target.setRole(newRole);
                    this.abekobeFlips.push(`${target.name}さんは夜の間に${GAME_CONFIG.roleDescriptions[newRole].name}に反転しました。`);
                } else {
                    // 第三陣営やその他は村人側に振る（安全策）
                    const newRole = villageRolesPool[Math.floor(Math.random() * villageRolesPool.length)];
                    target.setRole(newRole);
                    this.abekobeFlips.push(`${target.name}さんは夜の間に${GAME_CONFIG.roleDescriptions[newRole].name}に反転しました。`);
                }
                // 選択は一度だけ
                ab.abekobeTarget = null;
            }
        }
        
        // キル持ち陣営 vs 非キル持ち陣営の同数判定（昼開始前）
        const killersCount = this.players.filter(p => 
            p.alive && (
                p.role === 'werewolf' || 
                p.role === 'tricksterWerewolf' || 
                p.role === 'soulWerewolf' || 
                p.role === 'recruit'
            )
        ).length;
        
        const nonKillersCount = this.players.filter(p => 
            p.alive && (
                p.role === 'diviner' || p.role === 'knight' || p.role === 'madman' ||
                p.role === 'mediumship' || p.role === 'baker' || p.role === 'stuntman' ||
                p.role === 'sheriff' || p.role === 'star' || p.role === 'santa' ||
                p.role === 'fox' || p.role === 'hangman' || p.role === 'planner' ||
                p.role === 'survivor' || (p.role === 'mimick' && !p.satsmaiteMadman)
            )
        ).length;
        
        // キル持ちと非キル持ちが同数の場合の判定
        if (killersCount > 0 && nonKillersCount > 0 && killersCount >= nonKillersCount) {
            // レクリットがいない、または人狼1+レクリット0の場合、キル持ち勝利
            const recruitCount = this.players.filter(p => p.alive && p.role === 'recruit').length;
            const werewolfKillCount = this.players.filter(p => p.alive && ['werewolf', 'tricksterWerewolf', 'soulWerewolf'].includes(p.role)).length;
            
            if (recruitCount === 0) {
                // レクリット無し → キル持ち人狼勝利
                this.endGame(false, '人狼');
                return;
            }
            // レクリット有りの場合はゲーム続行
        }
        
        this.showDayPhase();
    }

    showDayPhase() {
        document.getElementById('setupPhase').style.display = 'none';
        document.getElementById('rolePhase').style.display = 'none';
        document.getElementById('dayPhase').style.display = 'block';
        document.getElementById('nightPhase').style.display = 'none';
        document.getElementById('gameEndPhase').style.display = 'none';

        let dayMessageContent = `<strong>第${this.dayCount}日目の昼</strong><br>`;
        
        // パン屋のアナウンス
        const bakerAlive = this.players.some(p => p.alive && p.role === 'baker');
        if (bakerAlive) {
            dayMessageContent += '<p style="color: #ffcc00; font-weight: bold;">おいしいパンが焼けていました</p>';
        }
        
        // 初日でない場合、夜に死亡したプレイヤーをまとめて表示
        const deathAnnouncement = document.getElementById('deathAnnouncement');
        if (this.nightCount > 0) {
            // 占われた妖狐を呪殺処理に加える
            for (const player of this.players) {
                if (player.alive && player.role === 'fox' && player.divinationCursed && !this.nightDeaths.includes(player)) {
                    player.deathCause = 'cursed';
                    player.kill();
                    this.nightDeaths.push(player);
                }
            }
            
            // もし人狼の襲撃ターゲットがまだ生きていて、未記録ならここで処理
            if (this.selectedTargets && this.selectedTargets.length > 0) {
                for (const selectedTarget of this.selectedTargets) {
                    if (!this.nightDeaths.includes(selectedTarget)) {
                        // 妖狐が占われた場合は呪殺（人狼の攻撃よりも優先）
                        if (selectedTarget.role === 'fox' && selectedTarget.divinationCursed) {
                            if (selectedTarget.alive) {
                                selectedTarget.deathCause = 'cursed';
                                selectedTarget.kill();
                                this.nightDeaths.push(selectedTarget);
                            }
                        } 
                        // 妖狐は人狼の通常攻撃を無効化（ただし魂狼の魂撃の対象になった場合は死ぬ）
                        else if (selectedTarget.role === 'fox') {
                            // 妖狐は通常の襲撃では死なない → 何もしない
                        } else if (selectedTarget.alive) {
                            selectedTarget.deathCause = 'attack';
                            selectedTarget.kill();
                            this.nightDeaths.push(selectedTarget);
                        }
                    }
                }
            }
            
            // 恋人の連鎖死処理（互いに指定された場合）
            for (const player of this.nightDeaths) {
                if (player.lover !== null) {
                    const loverPlayer = this.players[player.lover];
                    if (loverPlayer && loverPlayer.alive && !this.nightDeaths.includes(loverPlayer)) {
                        loverPlayer.deathCause = 'lover-death';
                        loverPlayer.kill();
                        this.nightDeaths.push(loverPlayer);
                    }
                }
            }
            
            if (this.nightDeaths && this.nightDeaths.length > 0) {
                deathAnnouncement.style.display = 'block';
                // 表示メッセージを作る
                const parts = this.nightDeaths.map(p => {
                    let msg = `${p.name}さんが朝方に死亡しました...`;
                    if (p.deathCause === 'self-elimination' || p.deathCause === 'santa-suicide') {
                        msg += `<br><span style="color: #ffaa00;">※行為により自らが死亡しました</span>`;
                    } else if (p.deathCause === 'lover-death') {
                        msg += `<br><span style="color: #ff1493;">※恋人の死によって一緒に死亡しました</span>`;
                    } else if (p.deathCause === 'cat-ally-kill') {
                        msg += `<br><span style="color: #ffaa00;">※猫又の道ずれ攻撃により死亡しました</span>`;
                    }
                    return msg;
                });
                const deathMessage = document.getElementById('deathMessage');
                deathMessage.innerHTML = parts.join('<br><br>');
                
                // 復讐者の場合、誰が自分を殺したのかを記録（後の復活判定用）
                for (const deadPlayer of this.nightDeaths) {
                    if (deadPlayer.role === 'revenger' && deadPlayer.deathCause === 'attack') {
                        // この復讐者を殺したキル役職を探す（werewolfTargetsで確認）
                        for (const [killerId, targetId] of Object.entries(this.werewolfTargets)) {
                            if (targetId === deadPlayer.id) {
                                const killerPlayer = this.players[killerId];
                                // フラグで記録（checkGameEndで確認する際に使用）
                                deadPlayer._killerPlayerId = killerId;
                                break;
                            }
                        }
                    }
                }
            } else {
                deathAnnouncement.style.display = 'none';
            }
        } else {
            deathAnnouncement.style.display = 'none';
        }

        const dayMessage = document.getElementById('dayMessage');
        dayMessage.innerHTML = dayMessageContent + 'お互いに話し合い、誰を処刑するか決めてください。';

        const startVotingBtn = document.getElementById('startVotingBtn');
        const votingArea = document.getElementById('votingArea');
        votingArea.innerHTML = '';
        votingArea.style.display = 'none';
        startVotingBtn.style.display = 'block';

        const voteResult = document.getElementById('voteResult');
        voteResult.innerHTML = '';

        // タイマーを開始
        this.startTimer();
    }

    startTimer() {
        const timerDisplay = document.getElementById('timerDisplay');
        
        // 既存のタイマーをクリア
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            if (this.timerSeconds > 0) {
                this.timerSeconds--;
                this.updateTimerDisplay();
            }
        }, 1000);

        this.updateTimerDisplay();
    }

    updateTimerDisplay() {
        const timerDisplay = document.getElementById('timerDisplay');
        const minutes = Math.floor(this.timerSeconds / 60);
        const seconds = this.timerSeconds % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    decreaseTimer() {
        if (this.timerSeconds >= 60) {
            this.timerSeconds -= 60;
            this.updateTimerDisplay();
        }
    }

    increaseTimer() {
        this.timerSeconds += 60;
        this.updateTimerDisplay();
    }

    startVoting() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.isVoting = true;
        this.votingResults = {}; // 投票結果をリセット
        
        const startVotingBtn = document.getElementById('startVotingBtn');
        const votingArea = document.getElementById('votingArea');

        startVotingBtn.style.display = 'none';
        votingArea.style.display = 'grid';
        votingArea.innerHTML = '';

        // スキップボタン
        const skipBtn = document.createElement('button');
        skipBtn.className = 'voteBtn';
        skipBtn.innerHTML = '🚫 スキップする';
        skipBtn.onclick = () => this.castVote(null);
        votingArea.appendChild(skipBtn);

        // 生存プレイヤーボタン
        for (const player of this.players) {
            if (player.alive) {
                const btn = document.createElement('button');
                btn.className = 'voteBtn';
                let buttonText = `${player.name}<br>(投票)`;
                btn.innerHTML = buttonText;
                
                // スターの名前を黄色にする
                if (player.role === 'star') {
                    btn.style.color = '#ffff00';
                    btn.style.fontWeight = 'bold';
                }
                
                btn.onclick = () => this.castVote(player.id);
                votingArea.appendChild(btn);
            }
        }
    }

    castVote(playerId) {
        if (playerId === null) {
            // スキップ選択
            const voteResult = document.getElementById('voteResult');
            voteResult.innerHTML = `<strong>スキップが選ばれました</strong><br>誰も処刑されませんでした。`;
            this.lastExecutedPlayer = null; // 処刑者なし
        } else {
            // プレイヤーを投票 → 処刑
            const votedPlayer = this.players[playerId];
            this.selectedVote = votedPlayer;
            this.lastExecutedPlayer = votedPlayer; // 処刑されたプレイヤーを記録
            votedPlayer.deathCause = 'executed';
            votedPlayer.kill();
            
            const voteResult = document.getElementById('voteResult');
            voteResult.innerHTML = `<strong>${votedPlayer.name}が投票により処刑されました</strong>`;
            
            // 猫又または黒猫が処刑されたときの道ずれ処理
            if ((votedPlayer.role === 'nekomata' || votedPlayer.role === 'blackCat') && votedPlayer.alive === false) {
                const aliveOthers = this.players.filter(p => p.alive && p.id !== votedPlayer.id);
                if (aliveOthers.length > 0) {
                    const randomTarget = aliveOthers[Math.floor(Math.random() * aliveOthers.length)];
                    randomTarget.deathCause = (votedPlayer.role === 'nekomata') ? 'cat-ally-kill' : 'executed';
                    randomTarget.kill();
                    voteResult.innerHTML += `<br><span style="color: #ff6666; font-weight: bold;">${randomTarget.name}さんが道ずれで死亡しました...</span>`;
                }
            }
        }

        // 復讐者の復活処理（キル役職が処刑されたときに復讐者を復活させる）
        if (this.selectedVote) {
            const executedPlayer = this.selectedVote;
            // 処刑されたプレイヤーがキル役職かどうかを確認
            if (['werewolf', 'tricksterWerewolf', 'soulWerewolf', 'sheriff', 'recruit'].includes(executedPlayer.role)) {
                // この実行者に殺された復讐者を探す
                for (const player of this.players) {
                    if (player.role === 'revenger' && !player.alive && player._killerPlayerId === executedPlayer.id && !player.revengeKillUsed) {
                        // 復讐者を復活させる
                        player.alive = true;
                        player.revengeKillUsed = true;
                        player.deathCause = null;
                        // 「息を吹き返しました」メッセージを表示（日中メッセージとして追加）
                        const voteResult = document.getElementById('voteResult');
                        if (voteResult) {
                            voteResult.innerHTML += `<br><span style="color: #1E90FF; font-weight: bold;">${player.name}さんが息を吹き返しました！</span>`;
                        }
                        break;
                    }
                }
            }
        }

        // 投票エリアを非表示
        const votingArea = document.getElementById('votingArea');
        votingArea.style.display = 'none';
        const startVotingBtn = document.getElementById('startVotingBtn');
        startVotingBtn.style.display = 'none';

        setTimeout(() => this.checkGameEnd(), 2000);
    }

    checkGameEnd() {
        // 人狼のみをカウント（狂人は含まない）
        const werewolfCount = this.players.filter(p => p.alive && (p.role === 'werewolf' || p.role === 'tricksterWerewolf' || p.role === 'soulWerewolf')).length;
        
        // パブロフ陣営
        const pablovOwner = this.players.find(p => p.alive && p.role === 'planner');
        const pablovDog = this.players.find(p => p.alive && p.role === 'recruit');
        const pablovCount = this.players.filter(p => p.alive && (p.role === 'planner' || p.role === 'recruit')).length;
        let pablovActive = (pablovCount > 0 && !!pablovDog && !!pablovOwner);
        
        // 村人陣営（妖狐と吊人も含める）
        const villageCount = this.players.filter(p => {
            if (!p.alive) return false;
            if (p.role === 'mimick') {
                // ミミックは現在の状態に基づいてカウント
                return p.satsmaiteMadman ? false : true; // 狂人状態false、村人状態true
            }
            return (p.role === 'diviner' || p.role === 'knight' || p.role === 'mediumship' || p.role === 'baker' || p.role === 'stuntman' || p.role === 'sheriff' || p.role === 'star' || p.role === 'santa' || p.role === 'fox' || p.role === 'hangman' || p.role === 'madman' || p.role === 'survivor' || p.role === 'nekomata' || p.role === 'revenger' || p.role === 'alchemist' || p.role === 'gameLeader' || p.role === 'shapeshifter' || p.role === 'blackCat');
        }).length;
        
        console.log(`[ゲーム終了チェック] 人狼:${werewolfCount} 村人:${villageCount} パブロフ:${pablovActive}`);
        
        // ミミックは個人で狂人/村人状態を持つが、狂人状態であっても人狼のキル能力は持たせない
        // よって人狼カウントには含めない
        const totalWerewolfCount = werewolfCount;
        
        // 吊人が処刑された場合（吊人の固有勝利条件）
        const hangmanExecuted = this.selectedVote && this.selectedVote.role === 'hangman';
        if (hangmanExecuted) {
            this.endGame(null, '吊人');
            return;
        }
        
        // パブロフの犬が既に存在していたが生存していない場合、パブロフ陣営を無効化
        if (this.players.some(p => p.role === 'recruit') && !pablovDog) {
            pablovActive = false;
        }

        // キル持ち人狼1人とパブロフのレクリット1人のみ残った場合は引き分け
        if (werewolfCount === 1 && pablovActive && pablovCount === 1 && villageCount === 0) {
            this.endGame(null, '引き分け');
            return;
        }
        
        // 妖狐の乗っ取り勝利チェック（妖狐が生き残り、かつ他の陣営の勝利条件を満たした場合）
        const foxAlive = this.players.find(p => p.alive && p.role === 'fox');
        const necromancerAlive = this.players.find(p => p.alive && p.role === 'necromancer');
        const cupidLoverAlive = this.players.filter(p => p.alive && p.lover !== null);
        
        // 人狼が全滅 → 村人勝利（ただし乗っ取り役職がいる場合は優先度順にチェック）
        if (totalWerewolfCount === 0 && !pablovActive) {
            // 優先度1: 吊人・サバイバーは勝つ
            const hangmanAlive = this.players.find(p => p.alive && p.role === 'hangman');
            const survivorAlive = this.players.find(p => p.alive && p.role === 'survivor');
            
            // 優先度2: 妖狐（最強の乗っ取り役職）
            if (foxAlive && !hangmanAlive && !survivorAlive) {
                this.endGame(null, '妖狐');
                return;
            }
            
            // 優先度3: ネクロマンサー（霊人を複数持つことで勢力を広げられる）
            if (necromancerAlive && !foxAlive && !hangmanAlive && !survivorAlive && !cupidLoverAlive.length) {
                this.endGame(null, 'ネクロマンサー');
                return;
            }
            
            // 優先度4: ラバーズ（恋人ペアが生き残っていれば勝利）
            if (cupidLoverAlive.length >= 2 && !foxAlive && !hangmanAlive && !survivorAlive && !necromancerAlive) {
                const loverNames = cupidLoverAlive.slice(0, 2).map(p => p.name).join('と');
                this.endGame(null, `ラバーズ（${loverNames}）`);
                return;
            }
            
            // 乗っ取り役職がない場合、村人勝利
            this.endGame(true, '村人');
            return;
        }
        
        // 人狼が村人以上 → 人狼勝利（ただし乗っ取り役職がいる場合は優先度順にチェック）
        if (totalWerewolfCount >= villageCount && !pablovActive) {
            const hangmanAlive = this.players.find(p => p.alive && p.role === 'hangman');
            const survivorAlive = this.players.find(p => p.alive && p.role === 'survivor');
            
            if (foxAlive && !hangmanAlive && !survivorAlive) {
                this.endGame(null, '妖狐');
                return;
            }
            
            if (necromancerAlive && !foxAlive && !hangmanAlive && !survivorAlive && !cupidLoverAlive.length) {
                this.endGame(null, 'ネクロマンサー');
                return;
            }
            
            if (cupidLoverAlive.length >= 2 && !foxAlive && !hangmanAlive && !survivorAlive && !necromancerAlive) {
                const loverNames = cupidLoverAlive.slice(0, 2).map(p => p.name).join('と');
                this.endGame(null, `ラバーズ（${loverNames}）`);
                return;
            }
            
            // 乗っ取り役職がない場合、人狼勝利
            this.endGame(false, '人狼');
            return;
        }
        
        // ゲーム続行
        this.startNight();
    }

    endGame(villageWon, winner) {
        this.gameState = 'end';
        document.getElementById('setupPhase').style.display = 'none';
        document.getElementById('rolePhase').style.display = 'none';
        document.getElementById('dayPhase').style.display = 'none';
        document.getElementById('nightPhase').style.display = 'none';
        document.getElementById('gameEndPhase').style.display = 'block';

        // サバイバーが生きているかチェック
        const opportunistAlive = this.players.find(p => p.alive && p.role === 'survivor');
        
        const endMessage = document.getElementById('endMessage');
        if (winner === '吊人') {
            const oppText = opportunistAlive ? `と${opportunistAlive.name}（サバイバー）` : '';
            endMessage.innerHTML = `<strong style="color: #ff00ff;">🎪 吊人${oppText}の勝利！</strong>`;
        } else if (winner === '妖狐') {
            const oppText = opportunistAlive ? `と${opportunistAlive.name}（サバイバー）` : '';
            endMessage.innerHTML = `<strong style="color: #ff9933;">🦊 妖狐${oppText}の乗っ取り勝利！</strong>`;
        } else if (winner === 'ネクロマンサー') {
            const oppText = opportunistAlive ? `と${opportunistAlive.name}（サバイバー）` : '';
            endMessage.innerHTML = `<strong style="color: #663399;">💀 ネクロマンサー${oppText}の乗っ取り勝利！</strong>`;
        } else if (winner && winner.startsWith('ラバーズ')) {
            const oppText = opportunistAlive ? `と${opportunistAlive.name}（サバイバー）` : '';
            endMessage.innerHTML = `<strong style="color: #FF1493;">💘 ${winner}${oppText}の乗っ取り勝利！</strong>`;
        } else if (winner === 'パブロフ') {
            const oppText = opportunistAlive ? `と${opportunistAlive.name}（サバイバー）` : '';
            endMessage.innerHTML = `<strong style="color: #8B6914;">🏠🐕 パブロフ陣営${oppText}の勝利！</strong>`;
        } else if (winner === '引き分け') {
            endMessage.innerHTML = `<strong style="color: #cccccc;">🤝 引き分け！</strong>`;
        } else if (villageWon) {
            const oppText = opportunistAlive ? `と${opportunistAlive.name}（サバイバー）` : '';
            endMessage.innerHTML = `<strong style="color: #00ff00;">🌲 村人チーム${oppText}の勝利！</strong>`;
        } else {
            const oppText = opportunistAlive ? `と${opportunistAlive.name}（サバイバー）` : '';
            endMessage.innerHTML = `<strong style="color: #ff4444;">🐺 人狼チーム${oppText}の勝利！</strong>`;
        }

        // ファイナルスタッツを表示
        const finalStats = document.getElementById('finalStats');
        let statsHTML = '<strong>最終結果:</strong><br>';
        for (const player of this.players) {
            const roleInfo = GAME_CONFIG.roleDescriptions[player.role] || { name: player.role, color: '#999' };
            const roleText = `<span style="color: ${roleInfo.color};">${roleInfo.name}</span>`;

            // 勝利判定：プレイヤーが勝利陣営に属しているかを確認
            let isWinner = false;
            if (villageWon !== null) {
                // 村人 vs 人狼の勝負
                if (villageWon) {
                    // 村人勝利
                    isWinner = (player.faction === 'village');
                } else {
                    // 人狼勝利
                    isWinner = (player.faction === 'werewolf');
                }
            } else if (winner === '妖狐') {
                isWinner = (player.role === 'fox');
            } else if (winner === '吊人') {
                isWinner = (player.role === 'hangman');
            } else if (winner === 'ネクロマンサー') {
                isWinner = (player.role === 'necromancer');
            } else if (winner && winner.startsWith('ラバーズ')) {
                // ラバーズは恋人ペア全員が生きていれば勝ち
                isWinner = (player.lover !== null && this.players[player.lover].alive);
            } else if (winner === 'パブロフ') {
                isWinner = (player.faction === 'planner');
            } else if (winner === '引き分け') {
                isWinner = true; // 引き分けは全員勝ち扱い
            }
            
            // サバイバーは独立勝利（誰が勝ってもサバイバーが生きていれば勝ち）
            if (player.role === 'survivor' && !player.alive) {
                isWinner = false;
            }
            
            // 吊人・サバイバーは常に独立勝利
            if ((player.role === 'hangman' || player.role === 'survivor') && player.alive) {
                isWinner = true;
            }

            let statusText = '';
            if (player.alive) {
                statusText = isWinner ? '<span class="status-alive" style="color: #00ff00; font-weight: bold;">🎉 勝利</span>' : '<span class="status-alive">生存</span>';
            } else {
                // 死因に基づいて表示
                const deathCauseMap = {
                    'executed': '処刑',
                    'attack': '死亡',
                    'sheriff': '正義の執行',
                    'cursed': '呪殺',
                    'soul-attack': '死亡',
                    'self-elimination': '死亡',
                    'santa-suicide': '死亡',
                    'lover-death': '恋人の死',
                    'cat-ally-kill': '怨念',
                    'owner-death': '主人の死'
                };
                const deathCause = deathCauseMap[player.deathCause] || '死亡';
                statusText = isWinner ? `<span style="color: #00ff00; font-weight: bold;">🎉 勝利</span>` : `<span class="status-dead">⚰️ ${deathCause}</span>`;
            }

            // 最終表示：元の役職から変わった場合は "元→現在" と表示（サツマイトは個別のため除外）
            let displayInfo = roleText;
            if (player.isSpirit) {
                // 霊人の場合は「元役職 → 霊人」と表示
                const origInfo = GAME_CONFIG.roleDescriptions[player.spiritOriginalRole] || { name: player.spiritOriginalRole };
                const origText = `<span style="color:#999;">${origInfo.name}</span>`;
                displayInfo = `${origText} → 霊人 (${player.name})`;
            } else if (player.lover !== null) {
                // 恋人ペアの場合は相手の名前を表示
                const loverPlayer = this.players[player.lover];
                displayInfo = `${roleText} (${player.name}💕${loverPlayer ? loverPlayer.name : '???'})`;
            } else if (player.originalRole && player.originalRole !== player.role && player.originalRole !== 'satsmaite') {
                const origInfo = GAME_CONFIG.roleDescriptions[player.originalRole] || { name: player.originalRole };
                const origText = `<span style="color:#666;">${origInfo.name}</span>`;
                displayInfo = `${origText} → ${roleText} (${player.name})`;
            } else if (player.faction === 'third') {
                displayInfo = `${roleText} (${player.name})`;
            }

            // 死亡しているVIPには注記を追加
            if (!player.alive && player.role === 'vip') {
                displayInfo += ` <span style="color:#cccc00;">※VIPでした</span>`;
            }

            statsHTML += `<div class="stat-line">${player.name}: ${displayInfo} - ${statusText}</div>`;
        }
        finalStats.innerHTML = statsHTML;
    }
}

// ゲーム開始
window.addEventListener('DOMContentLoaded', () => {
    new WerewolfGame();
});
 
